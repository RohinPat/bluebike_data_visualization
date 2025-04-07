function removeLoadingOverlay(containerId) {
    const container = document.querySelector(`#${containerId}`).closest('.visualization-container');
    const overlay = container.querySelector('.loading-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

// Configure default layout options
const defaultLayout = {
    autosize: true,
    height: 450,
    margin: { t: 50, r: 30, b: 80, l: 60 }
};

// Fetch and display visualizations
fetch('static/data.json')
    .then(response => response.json())
    .then(data => {
        // Create all plots with consistent layout
        const plots = [
            {
                id: 'hourly-trips',
                data: data.hourly_trips.data,
                layout: { ...defaultLayout, ...data.hourly_trips.layout }
            },
            {
                id: 'station-popularity',
                data: data.station_popularity.data,
                layout: { ...defaultLayout, ...data.station_popularity.layout }
            },
            {
                id: 'member-distribution',
                data: data.member_distribution.data,
                layout: { ...defaultLayout, ...data.member_distribution.layout }
            },
            {
                id: 'duration-distribution',
                data: data.duration_distribution.data,
                layout: { ...defaultLayout, ...data.duration_distribution.layout }
            }
        ];

        // Create all plots and handle loading states
        plots.forEach(plot => {
            Plotly.newPlot(plot.id, plot.data, plot.layout, { 
                responsive: true,
                displayModeBar: true,
                modeBarButtonsToRemove: ['lasso2d', 'select2d']
            })
            .then(() => removeLoadingOverlay(plot.id))
            .catch(error => {
                console.error(`Error creating plot ${plot.id}:`, error);
                const container = document.querySelector(`#${plot.id}`).closest('.visualization-container');
                container.innerHTML = '<p class="text-danger">Error loading visualization</p>';
            });
        });
    })
    .catch(error => {
        console.error('Error loading visualizations:', error);
        document.querySelectorAll('.visualization-container').forEach(container => {
            container.innerHTML = '<p class="text-danger">Error loading visualization</p>';
        });
    });

// Handle responsive resizing
window.addEventListener('resize', () => {
    document.querySelectorAll('.plot-container').forEach(container => {
        Plotly.Plots.resize(container);
    });
}); 