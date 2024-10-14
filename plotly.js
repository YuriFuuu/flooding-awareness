var TESTER_1 = document.getElementById('bar-chart');

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
  
Plotly.newPlot(TESTER_1, data, layout);














var TESTER_2 = document.getElementById('sunburst-chart');

var parents = [
  'Building Coverage', 'Building Coverage', 'Building Coverage', 'Building Coverage', 'Building Coverage', 
  'Building Coverage', 'Building Coverage', 'Building Coverage', 'Building Coverage', 'Building Coverage', 
  'Content Coverage', 'Content Coverage', 'Content Coverage', 'Content Coverage', 'Content Coverage', 
  'Content Coverage', 'Content Coverage', 'Content Coverage', 'Content Coverage', 'Content Coverage'
];

var labels = [
  'CALIFORNIA', 'FLORIDA', 'IOWA', 'LOUISIANA', 'MAINE', 'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW YORK', 'SOUTH CAROLINA', 'TEXAS', 
  'CALIFORNIA', 'FLORIDA', 'IOWA', 'LOUISIANA', 'MAINE', 'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW YORK', 'SOUTH CAROLINA', 'TEXAS'
];

var values =  [
  45516418000, 383588964000, 1865088000, 94761120000, 1703261000, 
  1612233000, 46505611000, 38871692000, 44500035000, 146238159000, 
  11264888000, 72874703000, 559271000, 29724541000, 403954000, 
  268267000, 6974225000, 8696172000, 10450339000, 50928604000
];

var data_2 = [
  {
    "type": "sunburst",
    "labels": labels,
    "parents": parents,
    "values":values,
    "leaf": {"opacity": 0.4},
    "marker": {"line": {"width": 2}},
    "branchvalues": 'total'
  }];
  
  var layout_2 = {
    "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
  };

// Plot the sunburst chart
Plotly.newPlot(TESTER_2, data_2, layout_2);