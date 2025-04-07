// Initialize visualizations with the provided data
function initializeVisualizations(data) {
    // Initialize the map
    const map = L.map('station-map').setView([42.3601, -71.0589], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Configure default layout options
    const defaultLayout = {
        autosize: true,
        height: 450,
        margin: { t: 50, r: 30, b: 80, l: 60 },
        plot_bgcolor: 'rgba(248,249,250,1)',
        paper_bgcolor: 'rgba(248,249,250,1)'
    };

    // Create Plotly visualizations
    const plotlyCharts = [
        {
            id: 'hourly-trips',
            data: data.hourly_trips.data,
            layout: { ...defaultLayout, ...data.hourly_trips.layout }
        },
        {
            id: 'trips-heatmap',
            data: data.heatmap.data,
            layout: { ...defaultLayout, ...data.heatmap.layout }
        },
        {
            id: 'member-distribution',
            data: data.member_distribution.data,
            layout: { ...defaultLayout, ...data.member_distribution.layout }
        },
        {
            id: 'station-popularity',
            data: data.station_popularity.data,
            layout: { ...defaultLayout, ...data.station_popularity.layout }
        },
        {
            id: 'popular-routes',
            data: data.popular_routes.data,
            layout: { ...defaultLayout, ...data.popular_routes.layout }
        }
    ];

    // Create each Plotly chart
    plotlyCharts.forEach(chart => {
        if (document.getElementById(chart.id)) {
            Plotly.newPlot(chart.id, chart.data, chart.layout, {
                responsive: true,
                displayModeBar: true,
                modeBarButtonsToRemove: ['lasso2d', 'select2d']
            }).catch(error => {
                console.error(`Error creating ${chart.id}:`, error);
                document.getElementById(chart.id).innerHTML = 
                    '<p style="color: red;">Error loading visualization</p>';
            });
        }
    });

    // Create Altair visualization
    if (document.getElementById('daily-usage-altair')) {
        vegaEmbed('#daily-usage-altair', data.daily_usage_altair, {
            actions: false,
            theme: 'light'
        }).catch(error => {
            console.error('Error creating Altair plot:', error);
            document.getElementById('daily-usage-altair').innerHTML = 
                '<p style="color: red;">Error loading visualization</p>';
        });
    }

    // Add station markers to the map
    if (data.d3_station_data) {
        const stations = data.d3_station_data;
        const maxTrips = Math.max(...stations.map(d => d.trips));

        stations.forEach(station => {
            const radius = Math.sqrt(station.trips / maxTrips) * 20;
            const circle = L.circleMarker([station.lat, station.lng], {
                radius: radius,
                fillColor: '#1e88e5',
                color: '#ffffff',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(map);

            circle.bindPopup(`
                <strong>${station.name}</strong><br>
                Total Trips: ${station.trips}
            `);
        });

        // Fit map bounds to show all stations
        const bounds = L.latLngBounds(stations.map(s => [s.lat, s.lng]));
        map.fitBounds(bounds, { padding: [50, 50] });
    }
}

// Handle responsive resizing
window.addEventListener('resize', () => {
    const plotlyCharts = ['hourly-trips', 'trips-heatmap', 'member-distribution', 
                         'station-popularity', 'popular-routes'];
    plotlyCharts.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            Plotly.Plots.resize(container);
        }
    });
}); 