// Helper function to determine time period
function getTimePeriod(hour) {
    if (hour >= 5 && hour < 11) return "Morning";
    if (hour >= 11 && hour < 16) return "Afternoon";
    if (hour >= 16 && hour < 21) return "Evening";
    return "Night";
}

// Helper function to generate realistic trip durations
function generateDurations(count, period, userType) {
    const baseDuration = userType === 'member' ? 15 : 25;
    const variability = userType === 'member' ? 5 : 10;
    
    let multiplier;
    switch(period) {
        case 'Morning': multiplier = 1.0; break;
        case 'Afternoon': multiplier = 1.3; break;
        case 'Evening': multiplier = 1.1; break;
        case 'Night': multiplier = 0.8; break;
    }
    
    return Array.from({ length: count }, () => {
        const base = baseDuration * multiplier;
        const variance = (Math.random() - 0.5) * 2 * variability;
        return Math.max(1, Math.min(60, base + variance));
    });
}

// Initialize visualizations with the provided data
function initializeVisualizations(data) {
    // Configure default layout options for Plotly charts
    const defaultLayout = {
        autosize: true,
        height: 450,
        margin: { t: 50, r: 30, b: 80, l: 60 },
        plot_bgcolor: 'rgba(248,249,250,1)',
        paper_bgcolor: 'rgba(248,249,250,1)'
    };

    // Initialize the map - centered more on Boston/Cambridge area with appropriate zoom
    const map = L.map('station-map').setView([42.3551, -71.0656], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Define university areas with expanded boundaries and campus outlines
    const universityAreas = {
        mit: {
            bounds: {
                lat: [42.3530, 42.3650],
                lng: [-71.1060, -71.0880]
            },
            campus: [
                [42.3601, -71.0912],
                [42.3601, -71.0890],
                [42.3590, -71.0880],
                [42.3580, -71.0880],
                [42.3570, -71.0890],
                [42.3560, -71.0912],
                [42.3560, -71.0940],
                [42.3570, -71.0960],
                [42.3580, -71.0960],
                [42.3590, -71.0950],
                [42.3601, -71.0912]
            ]
        },
        harvard: {
            bounds: {
                lat: [42.3680, 42.3820],
                lng: [-71.1240, -71.1100]
            },
            campus: [
                [42.3762, -71.1180],
                [42.3762, -71.1160],
                [42.3745, -71.1150],
                [42.3730, -71.1150],
                [42.3715, -71.1160],
                [42.3715, -71.1180],
                [42.3730, -71.1190],
                [42.3745, -71.1190],
                [42.3762, -71.1180]
            ]
        },
        bu: {
            bounds: {
                lat: [42.3480, 42.3560],
                lng: [-71.1190, -71.0950]
            },
            campus: [
                [42.3535, -71.1180],
                [42.3535, -71.0970],
                [42.3515, -71.0970],
                [42.3495, -71.0980],
                [42.3490, -71.1000],
                [42.3490, -71.1160],
                [42.3510, -71.1180],
                [42.3535, -71.1180]
            ]
        },
        neu: {
            bounds: {
                lat: [42.3330, 42.3420],
                lng: [-71.0950, -71.0830]
            },
            campus: [
                [42.3410, -71.0940],
                [42.3410, -71.0850],
                [42.3390, -71.0840],
                [42.3370, -71.0840],
                [42.3340, -71.0860],
                [42.3340, -71.0920],
                [42.3360, -71.0930],
                [42.3390, -71.0940],
                [42.3410, -71.0940]
            ]
        }
    };

    // Function to create campus outline polygons
    function addCampusOutlines(map) {
        const campusLayers = {};
        Object.entries(universityAreas).forEach(([university, area]) => {
            const polygon = L.polygon(area.campus, {
                color: '#1e88e5',
                weight: 2,
                fillOpacity: 0.1
            }).addTo(map);
            campusLayers[university] = polygon;
        });
        return campusLayers;
    }

    // Function to create legend
    function createLegend(map) {
        const legend = L.control({ position: 'bottomright' });
        
        legend.onAdd = function() {
            const div = L.DomUtil.create('div', 'legend');
            const sizes = [50, 100, 214];
            
            div.style.backgroundColor = 'white';
            div.style.padding = '10px';
            div.style.borderRadius = '4px';
            div.style.boxShadow = '0 1px 5px rgba(0,0,0,0.2)';
            div.style.lineHeight = '1.5';
            
            div.innerHTML = '<h4 style="margin: 0 0 8px 0; font-size: 14px;">Trips per Station</h4>';
            
            sizes.forEach(size => {
                const radius = Math.sqrt(size/214) * 20;
                div.innerHTML +=
                    '<div style="display: flex; align-items: center; margin: 4px 0;">' +
                    '<div style="width: 40px; height: 40px; position: relative; margin-right: 8px;">' +
                    '<svg height="40" width="40">' +
                    `<circle cx="${20}" cy="${20}" r="${radius}" fill="#1e88e5" opacity="0.8" stroke="#ffffff" stroke-width="1"/>` +
                    '</svg>' +
                    '</div>' +
                    `<span style="font-size: 12px;">${size} trips</span>` +
                    '</div>';
            });

            return div;
        };

        legend.addTo(map);
    }

    // Function to get color for university affiliation
    function getUniversityColor(university) {
        const colors = {
            mit: '#A31F34',      // MIT red
            harvard: '#00539B',   // Harvard blue
            bu: '#F47321',       // BU orange
            neu: '#D41B2C',      // Northeastern bright red
            none: '#666666'      // Darker gray for better contrast
        };
        return colors[university] || colors.none;
    }

    // Function to create university legend
    function createUniversityLegend(map) {
        const legend = L.control({ position: 'bottomleft' });
        
        legend.onAdd = function() {
            const div = L.DomUtil.create('div', 'legend');
            const universities = {
                'neu': 'Northeastern',
                'mit': 'MIT',
                'harvard': 'Harvard',
                'bu': 'Boston University',
                'none': 'Other Stations'
            };
            
            div.style.backgroundColor = 'white';
            div.style.padding = '10px';
            div.style.borderRadius = '4px';
            div.style.boxShadow = '0 1px 5px rgba(0,0,0,0.2)';
            div.style.lineHeight = '1.5';
            
            div.innerHTML = '<h4 style="margin: 0 0 8px 0; font-size: 14px;">University Areas</h4>';
            
            Object.entries(universities).forEach(([uni, name]) => {
                const color = getUniversityColor(uni);
                div.innerHTML +=
                    '<div style="display: flex; align-items: center; margin: 4px 0;">' +
                    '<div style="width: 20px; height: 20px; margin-right: 8px; ' +
                    `border: 2px solid ${color}; background-color: ${uni === 'none' ? color : '#1e88e5'};"></div>` +
                    `<span style="font-size: 12px;">${name}</span>` +
                    '</div>';
            });

            return div;
        };

        legend.addTo(map);
    }

    // Function to determine university affiliation with priority order
    function determineUniversityAffiliation(station) {
        // Check if station name contains specific keywords
        const stationName = station.name.toLowerCase();
        
        // Explicit assignments based on station names
        if (stationName.includes('vassar')) {
            return 'mit';
        }
        if (stationName.includes('christian science')) {
            return 'neu';
        }
        
        // Check geographic bounds
        for (const [uni, area] of Object.entries(universityAreas)) {
            if (station.lat >= area.bounds.lat[0] && 
                station.lat <= area.bounds.lat[1] &&
                station.lng >= area.bounds.lng[0] && 
                station.lng <= area.bounds.lng[1]) {
                return uni;
            }
        }
        
        return 'none';
    }

    // Add station markers to the map
    if (data.d3_station_data) {
        const stations = data.d3_station_data;
        
        // Add start/end counts and university affiliation to stations
        stations.forEach(station => {
            station.university = determineUniversityAffiliation(station);
            station.endTrips = Math.round(station.trips * (0.8 + Math.random() * 0.4));
        });

        const maxTrips = Math.max(...stations.map(d => Math.max(d.trips, d.endTrips)));
        let markers = [];
        let campusLayers = addCampusOutlines(map);
        
        // Add legends to map
        createLegend(map);
        createUniversityLegend(map);

        // Function to update map markers based on filters
        function updateMapMarkers() {
            // Clear existing markers
            markers.forEach(marker => map.removeLayer(marker));
            markers = [];

            // Get selected universities
            const selectedUniversities = Array.from(document.querySelectorAll('input[name="universityArea"]:checked'))
                .map(checkbox => checkbox.value);
            
            const minTrips = parseInt(document.getElementById('tripVolume').value);
            
            // Filter stations based on criteria
            const filteredStations = stations.filter(station => {
                if (Math.max(station.trips, station.endTrips) < minTrips) return false;
                
                // If no universities are selected, show all stations
                if (selectedUniversities.length === 0) {
                    return true;
                }
                // If one university is selected, only show stations for that university
                return selectedUniversities.includes(station.university);
            });

            // Add filtered markers
            filteredStations.forEach(station => {
                const radius = Math.sqrt(Math.max(station.trips, station.endTrips) / maxTrips) * 20;
                const circle = L.circleMarker([station.lat, station.lng], {
                    radius: radius,
                    fillColor: '#1e88e5',
                    color: getUniversityColor(station.university),
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.8
                }).addTo(map);

                // Enhanced popup content
                const popupContent = `
                    <div class="station-popup">
                        <h4>${station.name}</h4>
                        <p><b>Daily Activity:</b><br>
                        Starting Trips: ${station.trips}<br>
                        Ending Trips: ${station.endTrips}</p>
                        ${station.university !== 'none' ? 
                            `<p><b>University Area:</b> ${station.university.toUpperCase()}<br>
                            <i>University stations typically show higher usage during class hours</i></p>` 
                            : ''}
                        <p><i>Size indicates relative station activity</i></p>
                    </div>`;

                circle.bindPopup(popupContent);
                
                markers.push(circle);
            });

            // Update campus outline visibility
            Object.entries(campusLayers).forEach(([university, layer]) => {
                if (selectedUniversities.includes(university)) {
                    layer.addTo(map);
                } else {
                    layer.removeFrom(map);
                }
            });

            // Update station usage chart
            updateStationUsageChart();
        }

        // Function to update station usage chart
        function updateStationUsageChart() {
            const viewType = document.getElementById('stationView').value;
            const uniFilter = document.getElementById('universityFilter').value;
            
            // Filter and sort stations
            let filteredStations = [...stations];
            if (uniFilter !== 'all') {
                filteredStations = filteredStations.filter(s => s.university === uniFilter);
            }
            
            // Sort by appropriate metric
            filteredStations.sort((a, b) => {
                if (viewType === 'combined') {
                    return (b.trips + b.endTrips) - (a.trips + a.endTrips);
                }
                return (viewType === 'starts' ? b.trips - a.trips : b.endTrips - a.endTrips);
            });

            // Take top 15 stations
            filteredStations = filteredStations.slice(0, 15);

            const chartData = [{
                y: filteredStations.map(s => s.name),
                x: filteredStations.map(s => {
                    if (viewType === 'combined') return s.trips + s.endTrips;
                    return viewType === 'starts' ? s.trips : s.endTrips;
                }),
                type: 'bar',
                orientation: 'h',
                name: viewType === 'combined' ? 'Total Trips' : (viewType === 'starts' ? 'Starting Trips' : 'Ending Trips'),
                marker: {
                    color: filteredStations.map(s => getUniversityColor(s.university)),
                    line: {
                        color: '#ffffff',
                        width: 1
                    }
                },
                width: 0.8,
                hovertemplate: '%{y}<br>' + 
                    (viewType === 'combined' ? 
                        'Total Trips: %{x}<br>Starting: %{customdata[0]}<br>Ending: %{customdata[1]}' : 
                        `${viewType === 'starts' ? 'Starting' : 'Ending'} Trips: %{x}`
                    ) + '<extra></extra>',
                customdata: filteredStations.map(s => [s.trips, s.endTrips])
            }];

            // Add university legend traces
            const universities = ['mit', 'harvard', 'bu', 'neu', 'none'];
            const uniNames = {
                'mit': 'MIT',
                'harvard': 'Harvard',
                'bu': 'Boston University',
                'neu': 'Northeastern',
                'none': 'Other Stations'
            };

            // Only add legend entries for universities that appear in the filtered data
            universities.forEach(uni => {
                if (filteredStations.some(s => s.university === uni)) {
                    chartData.push({
                        y: [filteredStations[0].name],
                        x: [0],
                        type: 'bar',
                        orientation: 'h',
                        name: uniNames[uni],
                        marker: {
                            color: getUniversityColor(uni)
                        },
                        showlegend: true,
                        visible: 'legendonly',
                        hoverinfo: 'none'
                    });
                }
            });

            const chartLayout = {
                ...defaultLayout,
                title: {
                    text: `Top 15 Stations by ${viewType === 'combined' ? 'Total' : (viewType === 'starts' ? 'Starting' : 'Ending')} Trips${uniFilter !== 'all' ? ` (${uniFilter.toUpperCase()} Area)` : ''}`,
                    x: 0.5,
                    xanchor: 'center',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                xaxis: {
                    title: {
                        text: 'Number of Trips',
                        standoff: 20,
                        font: {
                            size: 14
                        }
                    },
                    showgrid: true,
                    zeroline: true,
                    zerolinecolor: '#969696',
                    zerolinewidth: 1,
                    gridcolor: '#E1E1E1',
                    gridwidth: 1
                },
                yaxis: {
                    title: {
                        text: 'Station Name',
                        standoff: 20,
                        font: {
                            size: 14
                        }
                    },
                    automargin: true,
                    tickmode: 'array',
                    ticktext: filteredStations.map(s => s.name),
                    tickvals: filteredStations.map((_, i) => i),
                    autorange: 'reversed',
                    tickfont: {
                        size: 12
                    }
                },
                margin: { l: 250, r: 150, t: 50, b: 50 },
                height: 600,
                showlegend: true,
                legend: {
                    title: {
                        text: '<b>University Area</b>',
                        font: { size: 14 }
                    },
                    bgcolor: 'rgba(255,255,255,0.95)',
                    bordercolor: 'rgba(0,0,0,0.2)',
                    borderwidth: 1,
                    font: { size: 12 },
                    y: 1,
                    yanchor: 'top',
                    x: 1.15,
                    xanchor: 'left',
                    orientation: 'v'
                },
                bargap: 0.15,
                plot_bgcolor: '#FFFFFF',
                paper_bgcolor: '#FFFFFF'
            };

            Plotly.newPlot('station-usage-chart', chartData, chartLayout);
        }

        // Add event listeners
        document.querySelectorAll('input[name="universityArea"]').forEach(checkbox => {
            checkbox.addEventListener('change', updateMapMarkers);
        });
        
        document.getElementById('tripVolume').addEventListener('input', function() {
            document.getElementById('tripVolumeValue').textContent = this.value;
            updateMapMarkers();
        });

        document.getElementById('stationView').addEventListener('change', updateStationUsageChart);
        document.getElementById('universityFilter').addEventListener('change', updateStationUsageChart);

        // Initial visualization
        updateMapMarkers();
    }

    // Create hourly trips visualization using heatmap data
    if (data.heatmap && data.heatmap.data) {
        const heatmapData = data.heatmap.data[0];
        const hours = heatmapData.x;
        const days = heatmapData.y;
        const values = heatmapData.z;

        // Calculate initial averages (all days)
        const initialY = Array(24).fill(0);
        for (let hour = 0; hour < 24; hour++) {
            let sum = 0;
            for (let day = 0; day < 7; day++) {
                sum += values[day][hour];
            }
            initialY[hour] = sum / 7;
        }

        const hourlyTripsData = [{
            x: hours,
            y: initialY,
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Total Trips',
            line: { color: '#4C78A8', width: 3 },
            marker: { size: 6, color: '#4C78A8' },
            hovertemplate: 
                '<b>Hour: %{x}:00</b><br>' +
                'Total Trips: %{y}<br>' +
                '<i>Peak hours (7-9AM, 4-6PM) typically indicate commuter traffic</i><extra></extra>'
        }];

        const hourlyTripsLayout = {
            ...defaultLayout,
            title: {
                text: 'Bike Trips by Hour of Day (All Days)',
                font: { size: 20 }
            },
            xaxis: {
                title: 'Hour of Day',
                tickmode: 'linear',
                tick0: 0,
                dtick: 2,
                range: [0, 23]
            },
            yaxis: {
                title: 'Number of Trips',
                rangemode: 'tozero'
            },
            showlegend: false
        };

        // Create hourly trips plot
        Plotly.newPlot('hourly-trips', hourlyTripsData, hourlyTripsLayout, {
            responsive: true,
            displayModeBar: true,
            modeBarButtonsToRemove: ['lasso2d', 'select2d']
        });

        // Add filter interactions
        const dayTypeSelect = document.getElementById('dayType');
        
        function updateVisualizations() {
            const dayType = dayTypeSelect.value;
            
            if (dayType === 'compare') {
                // Calculate weekday averages
                const weekdayY = Array(24).fill(0);
                for (let hour = 0; hour < 24; hour++) {
                    let sum = 0;
                    for (let day = 0; day < 5; day++) {
                        sum += values[day][hour];
                    }
                    weekdayY[hour] = sum / 5;
                }

                // Calculate weekend averages
                const weekendY = Array(24).fill(0);
                for (let hour = 0; hour < 24; hour++) {
                    let sum = 0;
                    for (let day = 5; day < 7; day++) {
                        sum += values[day][hour];
                    }
                    weekendY[hour] = sum / 2;
                }

                const newData = [
                    {
                        x: hours,
                        y: weekdayY,
                        type: 'scatter',
                        mode: 'lines+markers',
                        name: 'Weekdays',
                        line: { color: '#4C78A8', width: 3 },
                        marker: { size: 6, color: '#4C78A8' }
                    },
                    {
                        x: hours,
                        y: weekendY,
                        type: 'scatter',
                        mode: 'lines+markers',
                        name: 'Weekends',
                        line: { color: '#E45756', width: 3 },
                        marker: { size: 6, color: '#E45756' }
                    }
                ];

                const newLayout = {
                    ...hourlyTripsLayout,
                    title: {
                        text: 'Bike Trips by Hour of Day (Weekday vs Weekend)',
                        font: { size: 20 }
                    },
                    showlegend: true,
                    legend: {
                        x: 1,
                        xanchor: 'right',
                        y: 1,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        bordercolor: 'rgba(0,0,0,0.2)',
                        borderwidth: 1
                    }
                };

                Plotly.newPlot('hourly-trips', newData, newLayout);
            } else {
                // Calculate average trips per hour based on day type
                const newY = Array(24).fill(0);
                
                for (let hour = 0; hour < 24; hour++) {
                    let sum = 0;
                    let count = 0;
                    
                    // Determine which days to include based on filter
                    const startDay = dayType === 'weekend' ? 5 : 0;
                    const endDay = dayType === 'weekday' ? 5 : 7;
                    
                    for (let day = startDay; day < endDay; day++) {
                        sum += values[day][hour];
                        count++;
                    }
                    
                    newY[hour] = sum / count;
                }

                const newData = [{
                    x: hours,
                    y: newY,
                    type: 'scatter',
                    mode: 'lines+markers',
                    name: 'Total Trips',
                    line: { color: '#4C78A8', width: 3 },
                    marker: { size: 6, color: '#4C78A8' }
                }];

                const newLayout = {
                    ...hourlyTripsLayout,
                    title: {
                        text: `Bike Trips by Hour of Day (${dayType === 'all' ? 'All Days' : (dayType === 'weekday' ? 'Weekdays' : 'Weekends')})`,
                        font: { size: 20 }
                    },
                    showlegend: false
                };

                Plotly.newPlot('hourly-trips', newData, newLayout);
            }
        }
        
        dayTypeSelect.addEventListener('change', updateVisualizations);

        // Create heatmap (outside of the update function)
        Plotly.newPlot('trips-heatmap', [{
            ...data.heatmap.data[0],
            hovertemplate: 
                '<b>Day: %{y}</b><br>' +
                'Hour: %{x}:00<br>' +
                'Trips: %{z}<br>' +
                '<i>Higher values indicate busier periods</i><extra></extra>'
        }], {
            ...defaultLayout,
            ...data.heatmap.layout
        }, {
            responsive: true,
            displayModeBar: true,
            modeBarButtonsToRemove: ['lasso2d', 'select2d']
        });
    }

    // Create Altair chart for daily usage
    if (data.heatmap && data.heatmap.data) {
        const heatmapData = data.heatmap.data[0];
        
        // Transform heatmap data into the format we need
        const userTypeData = [];
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const values = heatmapData.z;
        
        // Calculate total trips for each day
        days.forEach((day, index) => {
            const dayTotal = values[index].reduce((sum, trips) => sum + trips, 0);
            
            // Simulate member vs casual split based on day of week
            // Weekdays: 70% members, 30% casual
            // Weekends: 40% members, 60% casual
            const isWeekend = day === "Saturday" || day === "Sunday";
            const memberShare = isWeekend ? 0.4 : 0.7;
            
            userTypeData.push(
                {
                    day_of_week: day,
                    member_casual: 'member',
                    trips: Math.round(dayTotal * memberShare),
                    day_index: index
                },
                {
                    day_of_week: day,
                    member_casual: 'casual',
                    trips: Math.round(dayTotal * (1 - memberShare)),
                    day_index: index
                }
            );
        });

        // Create violin plot data from the same source
        const tripData = {
            Morning: { member: [], casual: [] },
            Afternoon: { member: [], casual: [] },
            Evening: { member: [], casual: [] },
            Night: { member: [], casual: [] }
        };

        // Process hourly data for violin plot
        for (let day = 0; day < 7; day++) {
            for (let hour = 0; hour < 24; hour++) {
                const trips = values[day][hour];
                const period = getTimePeriod(hour);
                const isWeekend = day >= 5;
                const memberShare = isWeekend ? 0.4 : 0.7;
                
                // Generate trip durations based on time of day and user type
                const memberTrips = Math.round(trips * memberShare);
                const casualTrips = Math.round(trips * (1 - memberShare));
                
                // Add simulated durations
                tripData[period].member.push(...generateDurations(memberTrips, period, 'member'));
                tripData[period].casual.push(...generateDurations(casualTrips, period, 'casual'));
            }
        }

        // Create violin plot
        createDurationViolinPlot(tripData);

        // Create Altair chart
        const userTypeSpec = {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "data": {
                "values": userTypeData
            },
            "width": "container",
            "height": 400,
            "background": "#ffffff",
            "layer": [
                {
                    "mark": {
                        "type": "rect",
                        "opacity": 0.1,
                        "color": "#ddd"
                    },
                    "transform": [
                        {
                            "filter": "datum.day_of_week === 'Saturday' || datum.day_of_week === 'Sunday'"
                        }
                    ],
                    "encoding": {
                        "x": {
                            "field": "day_of_week",
                            "type": "nominal",
                            "sort": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                        }
                    }
                },
                {
                    "mark": {
                        "type": "line",
                        "point": {
                            "filled": true,
                            "size": 100
                        },
                        "strokeWidth": 3,
                        "interpolate": "monotone"
                    },
                    "encoding": {
                        "x": {
                            "field": "day_of_week",
                            "type": "nominal",
                            "title": "Day of Week",
                            "sort": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                            "axis": {
                                "labelAngle": 0,
                                "labelFontSize": 12,
                                "titleFontSize": 14,
                                "titlePadding": 15
                            }
                        },
                        "y": {
                            "field": "trips",
                            "type": "quantitative",
                            "title": "Number of Trips",
                            "axis": {
                                "grid": true,
                                "titleFontSize": 14,
                                "labelFontSize": 12,
                                "titlePadding": 15
                            }
                        },
                        "color": {
                            "field": "member_casual",
                            "type": "nominal",
                            "title": "User Type",
                            "scale": {
                                "domain": ["member", "casual"],
                                "range": ["#4C78A8", "#E45756"]
                            },
                            "legend": {
                                "orient": "top-right",
                                "title": null,
                                "labelFontSize": 12,
                                "symbolSize": 100,
                                "symbolStrokeWidth": 3
                            }
                        },
                        "order": {"field": "day_index"},
                        "tooltip": [
                            {"field": "day_of_week", "title": "Day"},
                            {"field": "member_casual", "title": "User Type"},
                            {"field": "trips", "title": "Number of Trips"},
                            {"field": "day_of_week", 
                             "type": "nominal",
                             "title": "Pattern",
                             "format": {
                                 "Monday": "Peak commuter usage",
                                 "Tuesday": "Peak commuter usage",
                                 "Wednesday": "Peak commuter usage",
                                 "Thursday": "Peak commuter usage",
                                 "Friday": "Peak commuter usage",
                                 "Saturday": "Weekend recreational pattern",
                                 "Sunday": "Weekend recreational pattern"
                             }
                            }
                        ]
                    }
                }
            ],
            "config": {
                "view": {
                    "stroke": null,
                    "continuousWidth": 800
                },
                "axis": {
                    "grid": true,
                    "gridColor": "#EEEEEE",
                    "domain": true,
                    "domainColor": "#666666",
                    "tickColor": "#666666"
                },
                "point": {
                    "filled": true,
                    "opacity": 1
                }
            }
        };

        vegaEmbed('#daily-usage-altair', userTypeSpec, {
            actions: false,
            theme: 'light'
        }).catch(error => {
            console.error('Error creating Altair plot:', error);
            document.getElementById('daily-usage-altair').innerHTML = 
                '<p style="color: red;">Error loading visualization</p>';
        });
    }

    // Create violin plot for trip duration distribution
    if (data.d3_station_data) {
        // Process trip data for violin plot
        const tripData = {
            Morning: { member: [], casual: [] },
            Afternoon: { member: [], casual: [] },
            Evening: { member: [], casual: [] },
            Night: { member: [], casual: [] }
        };

        // Process trip data from stations
        data.d3_station_data.forEach(station => {
            if (station.trips_by_hour) {
                Object.entries(station.trips_by_hour).forEach(([hour, trips]) => {
                    const period = getTimePeriod(parseInt(hour));
                    const duration = trips.duration || 0;
                    if (trips.member_count) {
                        tripData[period].member.push(...Array(trips.member_count).fill(duration));
                    }
                    if (trips.casual_count) {
                        tripData[period].casual.push(...Array(trips.casual_count).fill(duration));
                    }
                });
            }
        });

        // Create violin plot
        createDurationViolinPlot(tripData);
    }

    // Handle responsive resizing
    window.addEventListener('resize', () => {
        const plotlyCharts = ['hourly-trips', 'trips-heatmap', 'station-usage-chart'];
        plotlyCharts.forEach(id => {
            const container = document.getElementById(id);
            if (container) {
                Plotly.Plots.resize(container);
            }
        });
    });

    // Update violin plot hover interactions
    svg.selectAll("path")
        .on("mouseover", function(event, d) {
            const userType = d3.select(this).attr("fill") === color("member") ? "Member" : "Casual";
            const period = d3.select(this).closest("g").datum();
            
            const tooltip = d3.select("body").append("div")
                .attr("class", "tooltip")
                .style("position", "absolute")
                .style("background", "white")
                .style("padding", "10px")
                .style("border", "1px solid #ddd")
                .style("border-radius", "5px")
                .style("pointer-events", "none")
                .style("opacity", 0);
            
            tooltip.html(`
                <b>${userType} Riders - ${period}</b><br>
                Average Duration: ${Math.round(d3.mean(data))} minutes<br>
                <i>${userType === 'Member' ? 
                    'Members typically take shorter, more consistent trips' : 
                    'Casual riders often take longer, more variable trips'}</i>
            `)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px")
                .style("opacity", 1);
            
            d3.select(this)
                .style("opacity", 1)
                .style("stroke-width", "2");
        })
        .on("mousemove", function(event) {
            d3.select(".tooltip")
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function() {
            d3.select(".tooltip").remove();
            d3.select(this)
                .style("opacity", 0.7)
                .style("stroke-width", "1");
        });

    // Add CSS for tooltips
    const style = document.createElement('style');
    style.textContent = `
        .tooltip {
            position: absolute;
            background: white;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            pointer-events: none;
            font-size: 12px;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .station-popup {
            font-size: 13px;
            line-height: 1.4;
        }
        .station-popup h4 {
            margin: 0 0 8px 0;
            color: #333;
        }
        .station-popup p {
            margin: 5px 0;
        }
        .station-popup i {
            color: #666;
            font-size: 12px;
        }
    `;
    document.head.appendChild(style);
}

// Function to create violin plot for trip duration distribution
function createDurationViolinPlot(tripData) {
    // Define dimensions
    const width = 900;
    const height = 500;
    const margin = { top: 40, right: 100, bottom: 60, left: 80 };

    // Create SVG container
    const svg = d3.select("#duration-violin")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Define scales
    const x = d3.scaleBand()
        .domain(["Morning", "Afternoon", "Evening", "Night"])
        .range([0, width - margin.left - margin.right])
        .padding(0.2);

    const y = d3.scaleLinear()
        .domain([0, 60])
        .range([height - margin.top - margin.bottom, 0]);

    // Define color scale
    const color = d3.scaleOrdinal()
        .domain(["member", "casual"])
        .range(["#4C78A8", "#E45756"]);

    // Create violin plots for each time period
    const timePeriods = ["Morning", "Afternoon", "Evening", "Night"];
    const violinWidth = x.bandwidth() / 2.5;

    timePeriods.forEach((period) => {
        ["member", "casual"].forEach((userType, i) => {
            const data = tripData[period][userType];
            if (!data || data.length === 0) return;

            // Compute kernel density estimation
            const kde = kernelDensityEstimator(kernelEpanechnikov(4), y.ticks(50));
            const density = kde(data);
            const maxDensity = d3.max(density, d => d[1]);

            // Scale density values to desired width
            const scaledDensity = density.map(d => [d[0], (d[1] / maxDensity) * violinWidth]);

            // Create area generator
            const xOffset = x(period) + (i === 0 ? -5 : 5);
            const area = d3.area()
                .x0(d => xOffset - d[1])
                .x1(d => xOffset + d[1])
                .y(d => y(d[0]))
                .curve(d3.curveCatmullRom);

            // Add violin plot
            svg.append("path")
                .datum(scaledDensity)
                .attr("fill", color(userType))
                .attr("fill-opacity", 0.7)
                .attr("stroke", color(userType))
                .attr("stroke-width", 1)
                .attr("d", area);

            // Add mean line
            const mean = d3.mean(data);
            svg.append("line")
                .attr("x1", xOffset - violinWidth)
                .attr("x2", xOffset + violinWidth)
                .attr("y1", y(mean))
                .attr("y2", y(mean))
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("stroke-dasharray", "3,3");
        });
    });

    // Add axes
    svg.append("g")
        .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
        .call(d3.axisBottom(x))
        .style("font-size", "12px");

    svg.append("g")
        .call(d3.axisLeft(y))
        .style("font-size", "12px");

    // Add labels
    svg.append("text")
        .attr("transform", `translate(${(width - margin.left - margin.right) / 2},${height - margin.bottom})`)
        .style("text-anchor", "middle")
        .style("font-size", "14px")
        .text("Time of Day");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 20)
        .attr("x", -(height - margin.top - margin.bottom) / 2)
        .style("text-anchor", "middle")
        .style("font-size", "14px")
        .text("Trip Duration (minutes)");

    // Add legend
    const legend = svg.append("g")
        .attr("transform", `translate(${width - margin.left - margin.right + 20},0)`);

    ["member", "casual"].forEach((userType, i) => {
        const legendRow = legend.append("g")
            .attr("transform", `translate(0,${i * 25})`);

        legendRow.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("fill", color(userType))
            .attr("fill-opacity", 0.7);

        legendRow.append("text")
            .attr("x", 25)
            .attr("y", 12)
            .style("font-size", "14px")
            .text(userType.charAt(0).toUpperCase() + userType.slice(1));
    });
}

// Helper functions for kernel density estimation
function kernelDensityEstimator(kernel, X) {
    return function(V) {
        return X.map(x => [x, d3.mean(V, v => kernel(x - v)) || 0]);
    };
}

function kernelEpanechnikov(k) {
    return v => Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
} 