from flask import Flask, render_template, jsonify
import pandas as pd
import plotly.express as px
import plotly.utils
import json
import os
import altair as alt

app = Flask(__name__)

def load_and_process_data():
    df = pd.read_csv('202501-bluebikes-tripdata.csv')
    df['started_at'] = pd.to_datetime(df['started_at'])
    df['ended_at'] = pd.to_datetime(df['ended_at'])
    df['duration_minutes'] = (df['ended_at'] - df['started_at']).dt.total_seconds() / 60
    
    df_clean = df[
        (df['duration_minutes'] > 1) &
        (df['duration_minutes'] < 180) &
        (df['member_casual'].isin(['member', 'casual']))
    ].copy()
    
    if len(df_clean) > 10000:
        df_clean = df_clean.sample(n=10000, random_state=42)
    
    df_clean['hour'] = df_clean['started_at'].dt.hour
    df_clean['day_of_week'] = df_clean['started_at'].dt.day_name()
    
    day_order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    df_clean['day_of_week'] = pd.Categorical(df_clean['day_of_week'], categories=day_order, ordered=True)
    
    return df_clean

def clean_station_name(name):
    replacements = {
        '- Cambridge St': '',
        'at Mass Ave': '@ Mass Ave',
        'at Amherst St': '@ Amherst',
        'at Main St': '@ Main',
        'at Vassar St': '@ Vassar',
        'Central Square at Mass Ave': 'Central Square',
        'MIT Stata Center at Vassar St / Main St': 'Stata Center',
        'Central Square at Mass Ave / Essex St': 'Central Square',
        'MIT at Mass Ave / Amherst St': 'MIT Mass Ave',
        'MIT Pacific St at Purrington St': 'MIT Pacific',
        'Linear Park - Mass. Ave. at Cameron Ave.': 'Linear Park',
        'Davis Square': 'Davis Sq',
        'MIT Vassar St': 'Vassar St',
        'Ames St at Main': 'Ames @ Main'
    }
    for old, new in replacements.items():
        name = name.replace(old, new)
    return name.strip()

def generate_d3_station_data(df):
    # Only use necessary columns and filter out stations with no coordinates
    station_data = (df[['start_station_name', 'start_lat', 'start_lng']]
        .dropna(subset=['start_lat', 'start_lng'])
        .groupby('start_station_name')
        .agg({
            'start_lat': 'first',
            'start_lng': 'first',
            'start_station_name': 'count'
        })
        .rename(columns={'start_station_name': 'trips'})
        .reset_index()
    )
    
    # Clean station names and rename columns
    station_data = station_data.rename(columns={
        'start_station_name': 'name',
        'start_lat': 'lat',
        'start_lng': 'lng'
    })
    
    # Round coordinates and trips to reduce payload size
    station_data['lat'] = station_data['lat'].round(4)
    station_data['lng'] = station_data['lng'].round(4)
    station_data['trips'] = station_data['trips'].astype(int)
    
    # Convert to list of dicts for smaller payload
    stations_list = []
    for _, row in station_data.iterrows():
        stations_list.append({
            'name': clean_station_name(row['name']),
            'lat': row['lat'],
            'lng': row['lng'],
            'trips': row['trips']
        })
    
    return stations_list

def generate_altair_daily_usage(df):
    daily_hourly_trips = df.groupby(['day_of_week', 'hour', 'member_casual'], observed=True).size().reset_index(name='trips')
    highlight = alt.selection_point(fields=['member_casual'])
    
    base = alt.Chart(daily_hourly_trips).encode(
        x=alt.X('hour:Q', axis=alt.Axis(title='Hour of Day'), scale=alt.Scale(domain=[0, 23])),
        y=alt.Y('trips:Q', axis=alt.Axis(title='Number of Trips')),
        color=alt.Color('member_casual:N',
                       scale=alt.Scale(domain=['member', 'casual'],
                                     range=['#4C78A8', '#F58518']),
                       title='User Type'),
        opacity=alt.condition(highlight, alt.value(1), alt.value(0.2)),
        tooltip=['hour:Q', 'trips:Q', 'member_casual:N', 'day_of_week:N']
    ).properties(width=140, height=300).add_params(highlight)

    layered = alt.layer(
        base.mark_line(size=2),
        base.mark_circle(size=30, opacity=0.5)
    )

    chart = layered.facet(
        column=alt.Column('day_of_week:N',
                         sort=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                         header=alt.Header(labelOrient='top', title=None,
                                         labelPadding=10, labelFontSize=12,
                                         labelColor='#333333'))
    ).properties(
        title=alt.TitleParams('Hourly Trip Distribution by Day and User Type',
                             fontSize=20, fontWeight='normal',
                             color='#333333', anchor='middle', dy=10),
        padding={'left': 50, 'right': 50, 'top': 50, 'bottom': 50}
    ).configure_view(
        strokeWidth=0,
        fill='#ffffff',
        continuousHeight=300,
        continuousWidth=1000
    ).configure_legend(
        titleFontSize=12,
        labelFontSize=11,
        padding=10,
        cornerRadius=5,
        orient='top',
        offset=0
    ).configure_header(
        labelOrient='bottom',
        labelPadding=10
    ).configure_facet(
        spacing=10
    )
    
    return chart.to_dict()

def generate_visualizations(df):
    hourly_trips = df.groupby(['hour', 'member_casual'], observed=True).size().reset_index(name='trips')
    fig1 = px.line(hourly_trips, x='hour', y='trips',
                  title='Bike Trips by Hour of Day',
                  labels={'hour': 'Hour of Day', 'trips': 'Number of Trips'})
    fig1.update_layout(
        xaxis_title="Hour of Day",
        yaxis_title="Number of Trips",
        hovermode='x',
        plot_bgcolor='rgba(248,249,250,1)',
        paper_bgcolor='rgba(248,249,250,1)',
        xaxis=dict(gridcolor='rgba(0,0,0,0.1)', tickmode='linear', dtick=1),
        yaxis=dict(gridcolor='rgba(0,0,0,0.1)')
    )
    
    pivot_trips = df.pivot_table(
        index='day_of_week',
        columns='hour',
        values='duration_minutes',
        aggfunc='count'
    )
    
    fig_heatmap = px.imshow(
        pivot_trips,
        title='Trip Counts by Day and Hour',
        labels=dict(x='Hour of Day', y='Day of Week', color='Number of Trips'),
        color_continuous_scale='YlGnBu',
        aspect='auto'
    )
    
    fig_heatmap.update_layout(
        xaxis_title="Hour of Day",
        yaxis_title="Day of Week",
        xaxis=dict(
            tickmode='linear',
            tick0=0,
            dtick=1,
            ticktext=list(range(24)),
            tickvals=list(range(24))
        ),
        plot_bgcolor='rgba(248,249,250,1)',
        paper_bgcolor='rgba(248,249,250,1)',
        height=450,
        margin=dict(t=50, r=30, b=80, l=100)
    )
    
    station_counts = df['start_station_name'].value_counts().head(10)
    station_df = pd.DataFrame({
        'station': station_counts.index.map(clean_station_name),
        'trips': station_counts.values
    })
    
    fig2 = px.bar(station_df,
                  x='trips',
                  y='station',
                  orientation='h',
                  title='Top 10 Most Popular Starting Stations',
                  labels={'trips': 'Number of Trips', 'station': 'Station Name'},
                  color='trips',
                  color_continuous_scale='Blues')
    
    fig2.update_layout(
        title={
            'text': 'Top 10 Most Popular Starting Stations',
            'y': 0.95,
            'x': 0.5,
            'xanchor': 'center',
            'yanchor': 'top',
            'font': dict(size=20)
        },
        yaxis_title="",
        xaxis_title="Number of Trips",
        plot_bgcolor='rgba(248,249,250,1)',
        paper_bgcolor='rgba(248,249,250,1)',
        xaxis=dict(gridcolor='rgba(0,0,0,0.1)', title_font=dict(size=14), tickfont=dict(size=12)),
        yaxis=dict(gridcolor='rgba(0,0,0,0.1)', automargin=True, tickfont=dict(size=12)),
        margin=dict(l=20, r=20, t=100, b=50),
        showlegend=False,
        coloraxis_showscale=False
    )
    
    member_dist = df['member_casual'].value_counts()
    fig3 = px.pie(values=member_dist.values, names=member_dist.index,
                 title='Distribution of Member vs Casual Riders',
                 color_discrete_sequence=['#4C78A8', '#F58518'])
    fig3.update_traces(textinfo='percent+label')
    
    route_counts = df.groupby(['start_station_name', 'end_station_name']).size().reset_index(name='count')
    route_counts['start_station_clean'] = route_counts['start_station_name'].apply(clean_station_name)
    route_counts['end_station_clean'] = route_counts['end_station_name'].apply(clean_station_name)
    route_counts['route'] = route_counts['start_station_clean'] + ' → ' + route_counts['end_station_clean']
    
    top_routes = route_counts.nlargest(10, 'count')
    route_durations = df.groupby(['start_station_name', 'end_station_name'])['duration_minutes'].mean().reset_index()
    route_durations['route'] = route_durations['start_station_name'].apply(clean_station_name) + ' → ' + \
                              route_durations['end_station_name'].apply(clean_station_name)
    
    top_routes = top_routes.merge(route_durations[['route', 'duration_minutes']], on='route', how='left')
    
    fig4 = px.bar(top_routes,
                  x='count',
                  y='route',
                  orientation='h',
                  title='Most Popular Bike Routes',
                  labels={'count': 'Number of Trips', 
                         'route': 'Route',
                         'duration_minutes': 'Avg Duration (min)'},
                  color='duration_minutes',
                  color_continuous_scale='RdYlBu_r',
                  height=400)
    
    fig4.update_layout(
        title={
            'text': 'Most Popular Bike Routes',
            'y': 0.98,
            'x': 0.5,
            'xanchor': 'center',
            'yanchor': 'top',
            'font': dict(size=20)
        },
        yaxis_title="",
        xaxis_title="Number of Trips",
        plot_bgcolor='rgba(248,249,250,1)',
        paper_bgcolor='rgba(248,249,250,1)',
        xaxis=dict(gridcolor='rgba(0,0,0,0.1)', title_font=dict(size=12), tickfont=dict(size=10)),
        yaxis=dict(gridcolor='rgba(0,0,0,0.1)', automargin=True, tickfont=dict(size=10)),
        coloraxis=dict(
            colorbar=dict(
                title="Duration<br>(min)",
                titlefont=dict(size=10),
                tickfont=dict(size=9),
                len=0.8
            )
        ),
        margin=dict(l=10, r=50, t=80, b=30),
        showlegend=False
    )
    
    altair_chart = generate_altair_daily_usage(df)
    d3_data = generate_d3_station_data(df)
    
    return {
        'hourly_trips': json.loads(fig1.to_json()),
        'station_popularity': json.loads(fig2.to_json()),
        'member_distribution': json.loads(fig3.to_json()),
        'popular_routes': json.loads(fig4.to_json()),
        'daily_usage_altair': altair_chart,
        'd3_station_data': d3_data,
        'heatmap': json.loads(fig_heatmap.to_json())
    }

# Cache for storing processed data
_cached_data = None
_cached_visualizations = None

def get_cached_data():
    global _cached_data
    if _cached_data is None:
        _cached_data = load_and_process_data()
    return _cached_data

def get_cached_visualizations():
    global _cached_visualizations
    if _cached_visualizations is None:
        df = get_cached_data()
        _cached_visualizations = generate_visualizations(df)
    return _cached_visualizations

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def get_data():
    try:
        return jsonify(get_cached_visualizations())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    os.makedirs('static', exist_ok=True)
    # Pre-load data on startup
    get_cached_visualizations()
    app.run(debug=True) 