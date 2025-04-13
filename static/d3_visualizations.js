// D3 Visualizations for BlueBikes Data Analysis

// Function to create violin plot for trip duration distribution
function createDurationViolinPlot(tripData) {
    // Clear any existing violin plot
    d3.select("#duration-violin").selectAll("*").remove();

    // Define dimensions
    const width = 900;
    const height = 500;
    const margin = { top: 40, right: 60, bottom: 60, left: 60 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;

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
        .range([0, plotWidth])
        .padding(0.2);

    const y = d3.scaleLinear()
        .domain([0, 60])
        .range([plotHeight, 0]);

    // Define color scale
    const color = d3.scaleOrdinal()
        .domain(["member", "casual"])
        .range(["#4C78A8", "#E45756"]);

    // Create violin plots for each time period
    const timePeriods = ["Morning", "Afternoon", "Evening", "Night"];
    const violinWidth = x.bandwidth() / 2.5;

    // Calculate global max density for proper scaling
    let globalMaxDensity = 0;
    timePeriods.forEach(period => {
        ["member", "casual"].forEach(userType => {
            const data = tripData[period][userType];
            if (!data || data.length === 0) return;

            const kde = kernelDensityEstimator(kernelEpanechnikov(4), y.ticks(50));
            const density = kde(data);
            const maxDensity = d3.max(density, d => d[1]) * data.length; // Scale by number of trips
            globalMaxDensity = Math.max(globalMaxDensity, maxDensity);
        });
    });

    timePeriods.forEach((period) => {
        ["member", "casual"].forEach((userType, i) => {
            const data = tripData[period][userType];
            if (!data || data.length === 0) return;

            // Compute kernel density estimation
            const kde = kernelDensityEstimator(kernelEpanechnikov(4), y.ticks(50));
            const density = kde(data);

            // Scale density values by number of trips and global max
            const scaledDensity = density.map(d => [
                d[0],
                (d[1] * data.length / globalMaxDensity) * violinWidth
            ]);

            // Create area generator
            const xOffset = x(period) + x.bandwidth() / 2;
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
        .attr("transform", `translate(0,${plotHeight})`)
        .call(d3.axisBottom(x))
        .style("font-size", "12px");

    svg.append("g")
        .call(d3.axisLeft(y))
        .style("font-size", "12px");

    // Add labels
    svg.append("text")
        .attr("transform", `translate(${plotWidth/2},${height - margin.bottom/2})`)
        .style("text-anchor", "middle")
        .style("font-size", "14px")
        .text("Time of Day");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left/2)
        .attr("x", -plotHeight/2)
        .style("text-anchor", "middle")
        .style("font-size", "14px")
        .text("Trip Duration (minutes)");

    // Add legend
    const legend = svg.append("g")
        .attr("transform", `translate(${plotWidth - 100},0)`);

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

// Initialize visualization when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Generate sample data for testing with realistic proportions
    const memberMultiplier = 2.5; // Members have 2.5x more trips than casual riders
    const sampleData = {
        Morning: { 
            member: Array.from({length: 2500}, () => Math.random() * 20 + 10),
            casual: Array.from({length: 1000}, () => Math.random() * 30 + 15)
        },
        Afternoon: {
            member: Array.from({length: 2000}, () => Math.random() * 25 + 15),
            casual: Array.from({length: 800}, () => Math.random() * 35 + 20)
        },
        Evening: {
            member: Array.from({length: 3000}, () => Math.random() * 22 + 12),
            casual: Array.from({length: 1200}, () => Math.random() * 32 + 18)
        },
        Night: {
            member: Array.from({length: 1500}, () => Math.random() * 15 + 8),
            casual: Array.from({length: 600}, () => Math.random() * 25 + 10)
        }
    };
    
    createDurationViolinPlot(sampleData);
}); 