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
        (df['duration_minutes'] >= 1) &
        (df['duration_minutes'] <= 180) &
        (df['member_casual'].isin(['member', 'casual'])) &
        (df['start_station_name'].notna()) &
        (df['end_station_name'].notna()) &
        (df['start_lat'].notna()) &
        (df['start_lng'].notna()) &
        (df['end_lat'].notna()) &
        (df['end_lng'].notna())
    ].copy()
    
    df_clean['hour'] = df_clean['started_at'].dt.hour
    df_clean['day_of_week'] = df_clean['started_at'].dt.day_name()
    
    day_order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    df_clean['day_of_week'] = pd.Categorical(df_clean['day_of_week'], categories=day_order, ordered=True)
    
    if len(df_clean) > 10000:
        # Keep all columns including the grouping columns
        df_clean = df_clean.groupby(['day_of_week', 'member_casual'], observed=True, group_keys=False).apply(
            lambda x: x.sample(n=max(1, int(10000 * len(x) / len(df_clean))), random_state=42)
        )
    
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
    
    station_data = station_data.rename(columns={
        'start_station_name': 'name',
        'start_lat': 'lat',
        'start_lng': 'lng'
    })
    
    station_data['lat'] = station_data['lat'].round(4)
    station_data['lng'] = station_data['lng'].round(4)
    station_data['trips'] = station_data['trips'].astype(int)
    
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
    hourly_data = (df.groupby(['hour'], observed=True)
                    .size()
                    .reset_index(name='trips')
                    .sort_values('hour'))
    
    base = alt.Chart(hourly_data).encode(
        x=alt.X('hour:Q', 
                axis=alt.Axis(title='Hour of Day'),
                scale=alt.Scale(domain=[0, 23])),
        y=alt.Y('trips:Q',
                axis=alt.Axis(title='Total Number of Trips')),
        tooltip=['hour:Q', 'trips:Q']
    ).properties(
        width=800,
        height=400,
        title=alt.TitleParams(
            'Total Bike Trips by Hour of Day',
            fontSize=20,
            anchor='middle'
        )
    )

    hourly_viz = alt.layer(
        base.mark_line(
            interpolate='monotone',
            size=3,
            color='#4C78A8'
        ),
        base.mark_circle(
            size=50,
            opacity=0.5,
            color='#4C78A8'
        )
    ).configure_view(
        strokeWidth=0
    ).configure_axis(
        grid=True,
        gridColor='#EEEEEE'
    ).configure_title(
        offset=20
    )

    hourly_trips_dict = hourly_viz.to_dict()

    pivot_trips = df.pivot_table(
        index='day_of_week',
        columns='hour',
        values='duration_minutes',
        aggfunc='count',
        observed=True
    ).fillna(0)

    heatmap = px.imshow(
        pivot_trips,
        labels=dict(x='Hour of Day', y='Day of Week', color='Number of Trips'),
        title='Trip Distribution by Day and Hour',
        color_continuous_scale='YlOrRd'
    )
    heatmap.update_layout(
        xaxis_title='Hour of Day',
        yaxis_title='Day of Week',
        xaxis=dict(
            constrain='domain',
            scaleanchor=None,
            tickmode='linear',
            tick0=0,
            dtick=1,
            ticktext=list(range(24)),
            tickvals=list(range(24))
        ),
        yaxis=dict(
            constrain='domain',
            scaleanchor=None,
            categoryorder='array',
            categoryarray=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        )
    )

    top_stations = df['start_station_name'].value_counts().head(10)
    top_stations.index = top_stations.index.map(clean_station_name)
    
    station_bar = px.bar(
        x=top_stations.values,
        y=top_stations.index,
        orientation='h',
        title='Top 10 Most Popular Starting Stations',
        labels={'x': 'Number of Trips', 'y': 'Station Name'}
    )
    station_bar.update_layout(
        xaxis=dict(
            constrain='domain',
            scaleanchor=None
        ),
        yaxis=dict(
            constrain='domain',
            scaleanchor=None,
            autorange='reversed'
        )
    )

    route_counts = df.groupby(['start_station_name', 'end_station_name']).size().reset_index(name='count')
    top_routes = route_counts.nlargest(10, 'count')
    
    top_routes['start_station_name'] = top_routes['start_station_name'].apply(clean_station_name)
    top_routes['end_station_name'] = top_routes['end_station_name'].apply(clean_station_name)
    top_routes['route'] = top_routes['start_station_name'] + ' → ' + top_routes['end_station_name']
    
    routes_bar = px.bar(
        top_routes,
        x='count',
        y='route',
        orientation='h',
        title='Most Popular Bike Routes',
        labels={'count': 'Number of Trips', 'route': 'Route'},
        color='count',
        color_continuous_scale=['#cfe8fc', '#1e88e5']
    )
    routes_bar.update_layout(
        xaxis=dict(
            constrain='domain',
            scaleanchor=None
        ),
        yaxis=dict(
            constrain='domain',
            scaleanchor=None,
            autorange='reversed'
        ),
        coloraxis_showscale=False
    )

    d3_station_data = generate_d3_station_data(df)
    daily_usage_altair = generate_altair_daily_usage(df)

    return {
        'hourly_trips': hourly_trips_dict,
        'heatmap': json.loads(heatmap.to_json()),
        'station_popularity': json.loads(station_bar.to_json()),
        'popular_routes': json.loads(routes_bar.to_json()),
        'd3_station_data': d3_station_data,
        'daily_usage_altair': daily_usage_altair
    }

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

@app.route('/index.html')
def index_html():
    return render_template('index.html')

@app.route('/data')
def get_data():
    try:
        return jsonify(get_cached_visualizations())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    os.makedirs('static', exist_ok=True)
    get_cached_visualizations()
    app.run(debug=True) 