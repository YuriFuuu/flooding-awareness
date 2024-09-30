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
        }
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
    }
};
  
Plotly.newPlot(TESTER, data, layout);














var labels = [
  // Coverage types
  'Building Coverage', 
  'Content Coverage', 

  // Loss Payments
  'Residential', 
  'Non-Residential Small Business', 
  'Non-Residential Non-Small Business', 
  'Non-Business Non-Residential', 
  'Unknown',

  // States
  'CALIFORNIA', 
  'FLORIDA', 
  'IOWA', 
  'LOUISIANA', 
  'MAINE', 
  'NEW HAMPSHIRE', 
  'NEW JERSEY', 
  'NEW YORK', 
  'SOUTH CAROLINA', 
  'TEXAS'
];

// Payments data
var paymentsData = [
  [585060901.5, 11132084.42, 101049229.1, 40447877.72, 146439.62], // CALIFORNIA
  [10185874112, 157962281.9, 593537305.4, 381815385.2, 77794.91], // FLORIDA
  [219412340.1, 13889155.35, 85237004.87, 32804828.03, 12100.04], // IOWA
  [19010969379, 110229530.7, 1371100386, 300933555.5, 527558.93], // LOUISIANA
  [55677703.72, 1959248.92, 18171451.62, 7700617.86, 216], // MAINE
  [48892000.74, 1589662.66, 13007476.86, 3279247.44, 6277.79], // NEW HAMPSHIRE
  [5456899501, 110802492.3, 583312168.8, 309709469.6, 41886.03], // NEW JERSEY
  [5048676990, 31030597.08, 457456785.7, 179784615.5, 85840.22], // NEW YORK
  [894119469.3, 14087797.9, 69430870.89, 33705387.24, 303284.26], // SOUTH CAROLINA
  [15652061141, 190428748.2, 776739791.5, 557787742.6, 593201.01] // TEXAS
];

// Coverage data
var coverageData = [
  [45516418000, 11264888000], // CALIFORNIA
  [3.83589E+11, 72874703000], // FLORIDA
  [1865088000, 559271000], // IOWA
  [94761120000, 29724541000], // LOUISIANA
  [1703261000, 403954000], // MAINE
  [1612233000, 268267000], // NEW HAMPSHIRE
  [46505611000, 6974225000], // NEW JERSEY
  [38871692000, 8696172000], // NEW YORK
  [44500035000, 10450339000], // SOUTH CAROLINA
  [1.46238E+11, 50928604000] // TEXAS
];

// Create the link sources and targets
var source = [];
var target = [];
var value = [];

// Link states to coverage types
for (let i = 0; i < coverageData.length; i++) {
  target.push(0); // Link to Building Coverage
  source.push(2 + i); // Link to each state
  value.push(coverageData[i][0]); // Building Coverage values

  target.push(1); // Link to Content Coverage
  source.push(2 + i); // Link to each state
  value.push(coverageData[i][1]); // Content Coverage values
}

// Link payments to categories
for (let i = 0; i < paymentsData.length; i++) {
  for (let j = 0; j < paymentsData[i].length; j++) {
      target.push(2 + j); // Link to Payment categories
      source.push(2 + 10 + i); // Link to each state (after Coverage)
      value.push(paymentsData[i][j]);
  }
}

// Create the Sankey diagram data
var data = {
  type: "sankey",
  orientation: "h",
  node: {
      pad: 15,
      thickness: 30,
      line: {
          color: "black",
          width: 0.5
      },
      label: labels,
      color: ["blue", "green"].concat(Array(5).fill("orange")).concat(Array(10).fill("gray")) // Colors for nodes
  },
  link: {
      source: source,
      target: target,
      value: value
  }
};

var layout = {
  title: "Building Coverage and Loss Payments Sankey Diagram",
  font: {
      size: 10
  },
  height: 800
};

Plotly.newPlot('sankey-diagram', [data], layout);