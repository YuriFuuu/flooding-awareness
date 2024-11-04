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
      text: 'Number of Claims in the Top 10 States with the Highest Financial Losses',
      font: {
          family: 'Arial, sans-serif',
          size: 20,
          color: '#376b66'
      },
      y: 0.9
  },

    xaxis: {
      tickfont: {
        color: '#6d6d6d',
        size: 10
      }
    },
    yaxis: {
        tickfont: {
          color: '#6d6d6d',
          size: 10
        },
        automargin: true,
    },

    legend: {
      orientation: 'h',
      x: 0.5,
      xanchor: 'center',
      y: -0.09,
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
      l:100,
    }
};
  
Plotly.newPlot(TESTER, data, layout);





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

    document.querySelector('#hurricane-maps-helene').style.display = 'block';
    document.querySelector('#hurricane-maps-milton').style.display = 'none';

    document.querySelectorAll('.step').forEach(function(step) {
        var stepNum = parseInt(step.getAttribute('data-step'));
        if (stepNum >= 1 && stepNum <= 4) {
            // step.style.opacity = 1;
        } else {
            step.style.opacity = 0;
        }
    });

    scroller.destroy();  // Reset scrollama instance
    scroller = scrollama();  // Create a new instance

    scroller
        .setup({
            step: "#scrolly article .step[data-step='1'], #scrolly article .step[data-step='2'], #scrolly article .step[data-step='3'], #scrolly article .step[data-step='4']",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(handleStepEnter);
};

document.getElementById('milton-button').onclick = function() {
    document.getElementById('scrolly').style.display = 'block';
    
    document.querySelector('#hurricane-maps-milton').style.display = 'block';
    document.querySelector('#hurricane-maps-helene').style.display = 'none';
    
    document.querySelectorAll('.step').forEach(function(step) {
        var stepNum = parseInt(step.getAttribute('data-step'));
        if (stepNum >= 5 && stepNum <= 8) {
            // step.style.opacity = 1;
        } else {
            step.style.opacity = 0;
        }
    });

    scroller
        .setup({
            step: "#scrolly article .step[data-step='5'], #scrolly article .step[data-step='6'], #scrolly article .step[data-step='7'], #scrolly article .step[data-step='8']",
            offset: 0.5,
            debug: false
        })
        .onStepEnter(handleStepEnter);
};

// Scrollama setup
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");

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

    if (response.index === 1) {
        figure.select("img").style("transform", "scale(1.5) translateX(-100px) translateY(300px)");
    } else if (response.index === 2) {
        figure.select("img").style("transform","scale(2) translateX(100px) translateY(200px)");
    } else if (response.index === 3) {
        figure.select("img").style("transform","scale(1) translateX(0px) translateY(500px)");
    } else {
        figure.select("img").style("transform", "scale(1) translateX(0)");
    }
    figure.select("p").text(response.index + 1);
}

function init() {
    handleResize();
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.5,
            debug: false 
        })
        .onStepEnter(handleStepEnter);
}
init();
























// Script of Interactive Map
var margin = {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10
}, width = parseInt(d3.select('.map').style('width'))
    , width = width - margin.left - margin.right
    , mapRatio = 0.5
    , height = width * mapRatio
    , active = d3.select(null);

var svg = d3.select('.map').append('svg')
    .attr('class', 'center-container')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.left + margin.right);

svg.append('rect')
    .attr('class', 'background center-container')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.left + margin.right)
    .on('click', clicked);

Promise.resolve(d3.json('us-counties.topojson'))
    .then(ready);

var projection = d3.geoAlbersUsa()
    .translate([width / 2, height / 2])
    .scale(width);

var path = d3.geoPath()
    .projection(projection);

var g = svg.append("g")
    .attr('class', 'center-container center-items us-state')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

function ready(us) {
    g.append("g")
        .attr("id", "counties")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.counties).features)
        .enter().append("path")
        .attr("d", path)
        .attr("class", "county-boundary")
        .on("click", reset);

    g.append("g")
        .attr("id", "states")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path")
        .attr("d", path)
        .attr("class", "state")
        .on("click", clicked);

    g.append("path")
        .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
        .attr("id", "state-borders")
        .attr("d", path);
}

function clicked(d) {
    if (d3.select('.background').node() === this) return reset();
    if (active.node() === this) return reset();

    active.classed("active", false);
    active = d3.select(this).classed("active", true);

    var bounds = path.bounds(d),
        dx = bounds[1][0] - bounds[0][0],
        dy = bounds[1][1] - bounds[0][1],
        x = (bounds[0][0] + bounds[1][0]) / 2,
        y = (bounds[0][1] + bounds[1][1]) / 2,
        scale = .9 / Math.max(dx / width, dy / height),
        translate = [width / 2 - scale * x, height / 2 - scale * y];

    g.transition()
        .duration(750)
        .style("stroke-width", 1.5 / scale + "px")
        .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
}

function reset() {
    active.classed("active", false);
    active = d3.select(null);

    g.transition()
        .delay(100)
        .duration(750)
        .style("stroke-width", "1.5px")
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    
    var infoBox = document.getElementById('info-box');
    infoBox.style.display = 'block'; // Show the box

    // Set the content of the box (You can customize this to show relevant information about the state)
    infoBox.innerHTML = "<strong>State Information</strong><br>" +
        "State: " + d.properties.name + "<br>" + // Example data, assuming you have 'name' property for the state
        "Population: " + d.properties.population + "<br>"; // Example data

    // Set the position of the info box (mouse position or state position)
    var eventCoords = d3.mouse(this); // Get the mouse coordinates when clicked
    infoBox.style.left = (eventCoords[0] + 10) + 'px'; // Position it slightly to the right of the click
    infoBox.style.top = (eventCoords[1] + 10) + 'px';  // Position it slightly below the click
}
