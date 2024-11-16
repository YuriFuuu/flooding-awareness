// Script of Plotly Bar Chart
var TESTER = document.getElementById('bar-chart');

var trace1 = {
    x: [186, 343, 266, 498, 940, 395, 697, 712, 1945, 2341],
    y: ['Iowa', 'South Carolina', 'New Hampshire', 'Louisiana', 'New Jersey', 'California', 'New York', 'Maine', 'Florida', 'Texas'],
    name: 'Closed With Payment Losses',
    orientation: 'h',
    type: 'bar',
    marker: {
        color: 'rgba(67, 163, 149, 1)',
        width: 1
    },
};
var trace2 = {
    x: [20, 128, 42, 195, 290, 162, 263, 182, 801, 1237],
    y: ['Iowa', 'South Carolina', 'New Hampshire', 'Louisiana', 'New Jersey', 'California', 'New York', 'Maine', 'Florida', 'Texas'],
    name: 'Closed Without Payment Losses',
    orientation: 'h',
    type: 'bar',
    marker: {
        color: 'rgba(67, 163, 149, 0.6)',
        width: 1
    }
};
var trace3 = {
    x: [43, 291, 3, 27, 179, 20, 181, 15, 1208, 832],
    y: ['Iowa', 'South Carolina', 'New Hampshire', 'Louisiana', 'New Jersey', 'California', 'New York', 'Maine', 'Florida', 'Texas'],
    name: 'Open Losses',
    orientation: 'h',
    type: 'bar',
    marker: {
        color: 'rgba(67, 163, 149, 0.3)',
        width: 1
    }
};

var data = [trace1, trace2, trace3];

var layout = {
    barmode: 'stack',
    barcornerradius: 5,
    plot_bgcolor: '#EBF7F6',
    paper_bgcolor: '#D8EFEE',
    title: {
        text: 'Number of Claims in the Top 10 States',
        font: {
            family: 'Arial, sans-serif',
            size: 20,
            color: '#376b66'
        },
        y: 0.92,
    },
    xaxis: {
        tickfont: {
            color: '#6d6d6d',
            size: 10
        },
        automargin: true
    },
    yaxis: {
        tickfont: {
            color: '#6d6d6d',
            size: 10
        },
        automargin: true
    },
    legend: {
        orientation: 'h',
        x: 0.5,
        xanchor: 'center',
        y: -0.1,
        font: {
            family: 'Arial, sans-serif',
            size: 12,
            color: '#6d6d6d'
        },
        bgcolor: 'rgba(255, 255, 255, 0.8)',
        bordercolor: '#ccc',
        borderwidth: 1
    },
    margin: {
        l: 20,
        r: 20,
        t: 80,
        b: 20
    },
    autosize: true
};
var config = {
    responsive: true,
    displayModeBar: false
};

function updateChart() {
    Plotly.newPlot(TESTER, data, layout, config);
}
updateChart();

window.addEventListener('resize', updateChart);





// Script of Hurricane Process
const images = ['flooding1.gif', 'flooding2.gif', 'flooding3.gif'];
let currentIndex = 0;

const imageElement = document.getElementById('display-gif');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

// Function to update the displayed image and button visibility
function updateImage() {
    imageElement.src = images[currentIndex];
    if (currentIndex === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "initial";
    }
    if (currentIndex === 2) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "initial";
    }
}

updateImage();

nextButton.addEventListener('click', function() {
    if (currentIndex < 2) { 
        currentIndex++;
        updateImage(); 
    }
});

prevButton.addEventListener('click', function() {
    if (currentIndex > 0) { 
        currentIndex--;
        updateImage(); 
    }
});





document.getElementById('helene-button').onclick = function() {
    document.getElementById('scrolly').style.display = 'block';
    document.getElementById('scrolly-article-1').style.display = 'block';
    document.getElementById('scrolly-article-2').style.display = 'none';
    document.querySelector('#hurricane-maps-helene').style.display = 'block';
    document.querySelector('#hurricane-maps-milton').style.display = 'none';

    scroller.destroy();
    scroller = scrollama();

    scroller
        .setup({
            step: "#scrolly-article-1 .step",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(handleStepEnter);
};

document.getElementById('milton-button').onclick = function() {
    document.getElementById('scrolly').style.display = 'block';
    document.getElementById('scrolly-article-2').style.display = 'block';
    document.getElementById('scrolly-article-1').style.display = 'none';
    document.querySelector('#hurricane-maps-milton').style.display = 'block';
    document.querySelector('#hurricane-maps-helene').style.display = 'none';

    scroller.destroy();
    scroller = scrollama();

    scroller
        .setup({
            step: "#scrolly-article-2 .step",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(handleStepEnter);
};

var scroller = scrollama();

function handleResize() {
    var stepH = Math.floor(window.innerHeight * 0.5);
    step.style("height", stepH + "px");

    var figureHeight = window.innerHeight / 1;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2;

    figure
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px");
    scroller.resize();
}

function handleStepEnter(response) {
    document.querySelectorAll(".step").forEach(step => {
        step.classList.remove("is-active");
    });
    response.element.classList.add("is-active");

    if (document.querySelector('#hurricane-maps-helene').style.display === 'block') {
        const heleneMap = d3.select("#hurricane-maps-helene");
        if (response.index === 1) {
            heleneMap.style("transform", "scale(1.5) translateX(-100px) translateY(300px)");
        } else if (response.index === 2) {
            heleneMap.style("transform", "scale(2) translateX(100px) translateY(200px)");
        } else if (response.index === 3) {
            heleneMap.style("transform", "scale(1) translateX(0px) translateY(500px)");
        } else {
            heleneMap.style("transform", "scale(1) translateX(0)");
        }
    }

    if (document.querySelector('#hurricane-maps-milton').style.display === 'block') {
        const miltonMap = d3.select("#hurricane-maps-milton");
        if (response.index === 1) {
            miltonMap.style("transform", "scale(1.5) translateX(100px) translateY(500px)");
        } else if (response.index === 2) {
            miltonMap.style("transform", "scale(2) translateX(-150px) translateY(400px)");
        } else if (response.index === 3) {
            miltonMap.style("transform", "scale(2.5) translateX(-200px) translateY(300px)");
        } else if (response.index === 4) {
            miltonMap.style("transform", "scale(1) translateX(0) translateY(1080px)");
        } else {
            miltonMap.style("transform", "scale(1) translateX(0) translateY(0)")
        }
    }

    figure.select("p").text(response.index + 1);
}

function init() {
    scroller
        .setup({
            step: "#scrolly-article-1 .step",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(handleStepEnter);
}
init();





// Script of Interactive Map
const container = document.getElementById('in-map');
const width = 1000;
const height = 600;

const svg = d3.select('#in-map')
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto;");

const path = d3.geoPath();
const g = svg.append("g");

let statesFeatures = [];
let floodData = [];

Promise.all([
    fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json').then(response => response.json()),
    fetch('significant-flood-events.json').then(res => res.json())
]).then(([us, floodEvents]) => {
    statesFeatures = topojson.feature(us, us.objects.states).features;
    floodData = floodEvents;
    // console.log("statesFeatures:", statesFeatures); 
    // console.log("floodData:", floodData);

    g.selectAll("path")
        .data(statesFeatures)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#444")
        .attr("cursor", "pointer")
        .attr("data-index", (d, i) => i)
        .on("click", clicked);

    g.append("path")
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-linejoin", "round")
        .attr("d", path(topojson.mesh(us, us.objects.states, (a, b) => a !== b)));
})
.catch(error => console.error("Error loading or processing data:", error));

function clicked(event, d) {
    const states = g.selectAll("path");
    states.transition().style("fill", null);
    d3.select(this).transition().style("fill", "#2ea390");

    const index = +d3.select(this).attr("data-index");
    const stateData = statesFeatures[index];
    const stateName = stateData.properties.name.trim().toUpperCase();
    const stateFloodData = floodData.filter(event => event.name.trim().toUpperCase() === stateName);
    // console.log("Clicked state index:", index);
    // console.log("State data from statesFeatures:", stateData);
    // console.log("State name:", stateName);
    // console.log("stateFloodData:", stateFloodData);

    updateInfoBox(stateName, stateFloodData, d);
}

// function updateInfoBox(stateName, floodData) {
//     const infoBox = document.getElementById("info-box");

//     infoBox.style.display = "block";

//     floodData.sort((a, b) => a.Date - b.Date);

//     if (floodData.length > 0) {
//         let tableContent = `
//             <h3>Flood Events in ${stateName}</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Number of Paid Losses</th>
//                         <th>Average Net Payments</th>
//                         <th>Total Net Payment</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//         `;

//         // Loop through the sorted flood data and populate table rows
//         floodData.forEach(event => {
//             tableContent += `
//                 <tr>
//                     <td>${new Date(event.Date).toLocaleDateString()}</td>
//                     <td>${event["Number of Paid Losses"]}</td>
//                     <td>$${event["Average Net Payments"].toFixed(2)}</td>
//                     <td>$${event["Total Net Payment"].toFixed(2)}</td>
//                 </tr>
//             `;
//         });
//         tableContent += `</tbody></table>`;

//         infoBox.innerHTML = tableContent;
//     } else {
//         infoBox.innerHTML = `<h3>${stateName}</h3><p>No flood data available.</p>`;
//     }
// }



function updateInfoBox(stateName, floodData) {
    const infoBox = document.getElementById("info-box");

    infoBox.style.display = "block";

    floodData.sort((a, b) => a.Date - b.Date);

    if (floodData.length > 0) {
        let tableContent = `
            <h3>Flood Events in ${stateName}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Number of Paid Losses</th>
                        <th>Average Net Payments</th>
                        <th>Total Net Payment</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Loop through the sorted flood data and populate table rows with color-coded background
        floodData.forEach(event => {
            const totalNetPayment = event["Total Net Payment"];
            const rowColor = getRowColor(totalNetPayment);

            tableContent += `
                <tr style="background-color: ${rowColor};">
                    <td>${new Date(event.Date).toLocaleDateString()}</td>
                    <td>${event["Number of Paid Losses"]}</td>
                    <td>$${event["Average Net Payments"].toFixed(2)}</td>
                    <td>$${totalNetPayment.toFixed(2)}</td>
                </tr>
            `;
        });
        tableContent += `</tbody></table>`;

        infoBox.innerHTML = tableContent;
    } else {
        infoBox.innerHTML = `<h3>${stateName}</h3><p>No flood data available.</p>`;
    }
}

function getRowColor(value) {
    if (value > 10000000) {
        return '#6AB8A0';
    } else if (value > 5000000) {
        return '#76CCB7';
    } else if (value > 1000000) {
        return '#94D6C6';
    } else if (value > 500000) {
        return '#B8E7DD';
    } else {
        return '#D5F5F3';
    }
}
