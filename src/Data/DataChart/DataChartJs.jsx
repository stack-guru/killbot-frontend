import React from 'react';
import { Bar, Line, Doughnut, Pie, Radar, PolarArea } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


// Line Chart

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

export const data = {
  labels: ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      
    scales: {
      x: {
        ticks: {
          color: '#fff',
        }
      },
      y: {
        ticks: {
          color: '#fff',
        }
      }
    },
      label: 'Profits',
      data: [100, 420, 210, 420, 210, 320, 350],
      borderColor: '#6c5ffc',
      backgroundColor: 'transparent',
      tension: 0.3,
    },
    {
      label: 'Expenses',
      data: [450, 200, 350, 250, 480, 200, 400],
      borderColor: '#05c3fb',
      backgroundColor: 'transparent',
      tension: 0.3
      
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
};


// Bar Chart1


export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};


export const data1 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      label: 'Sales',
      data: [200, 450, 290, 367, 256, 543, 345, 290, 367],
      backgroundColor: ['#6c5ffc'],
      borderColor: ['#6c5ffc'],
    },
  ],

};

export function BarChart() {
  return <Bar options={options1} data={data1} />;
}


// Bar Chart2

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js MultiBar Chart',
    },
  },
};


export const data2 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: 'Data1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: ['#6c5ffc'],
      borderColor: ['6c5ffc'],
    },
    {
      label: 'Data2',
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: ['#05c3fb'],
      borderColor: ['#05c3fb'],
    },
  ],
};

export function MultiBarChart() {
  return <Bar options={options2} data={data2} />;
}

// Area Chart

export const options3 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

export const data3 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: 'Data1',
      data: [22, 44, 67, 43, 76, 45, 12],
      borderColor: '#6c5ffc',
      backgroundColor: '#6c5ffc1a',
      fill: true,
      tension: 0.3,
    },
    {
      label: 'Data2',
      data: [16, 32, 18, 26, 42, 33, 44],
      borderColor: '#05c3fbe6',
      backgroundColor: "#05c3fbb3",
      pointHighlightStroke: "#05c3fb",
      fill: true,
      tension: 0.4
    },
  ],
};

export function AreaChart() {
  return <Line options={options3} data={data3} />;
};

// Donut Chart

export const data4 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: '# of Votes',
      data: [20, 20, 30, 5, 25],
      backgroundColor: [
        '#6c5ffc',
        '#05c3fb',
        '#09ad95',
        '#1170e4',
        '#e82646',
      ],

    },
  ],
};

export function DonutChart() {
  return <Doughnut data={data4} width={50}/>;
}

// Pie Chart

export const data5 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: '# of Votes',
      data: [20, 20, 30, 5, 25],
      backgroundColor: [
        '#6c5ffc',
        '#05c3fb',
        '#09ad95',
        '#1170e4',
        '#e82646',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie data={data5} />;
}

// Radar Chart

export const data6 = {
  labels: [["Eating", "Dinner"],
  ["Drinking", "Water"],
    "Sleeping",
  ["Designing", "Graphics"],
    "Coding",
    "Cycling",
    "Running",
  ],

  datasets: [
    {
      label: 'Data1',
      data: [65, 59, 66, 45, 56, 55, 40],
      backgroundColor: '#6c5ffc66',
      borderColor: '#6c5ffccc',
      borderWidth: 1,
    },
    {
      label: 'Data2',
      data: [28, 12, 40, 19, 63, 27, 87],
      backgroundColor: '#05c3fb66',
      borderColor: '#05c3fbcc',
      borderWidth: 1,
    },
  ],
};

export function RadarChart() {
  return <Radar data={data6} />;
}

// Polar Chart

export const data7 = {
  labels: ["Data1", "Data2", "Data3", "Data4"],
  datasets: [
    {
      label: '# of Votes',
      data: [18, 15, 9, 6, 19],
      backgroundColor: [
        '#6c5ffc',
        '#05c3fb',
        '#09ad95',
        '#1170e4',
        '#e82646',
      ],
      hoverBackgroundColor: ['#6c5ffc', '#05c3fb', '#09ad95', '#1170e4', '#e82646'],
      borderColor: 'transparent',
      borderWidth: 1,
    },
  ],
};

export function PolarChart() {
  return <PolarArea data={data7} />;
}