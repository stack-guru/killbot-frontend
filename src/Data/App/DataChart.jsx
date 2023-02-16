import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ['2007-2008', '2009-2010', '2011-2012', '2013-2014', '2015-2016', '2017-2018'];


export const data = {
  labels,
  
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      backgroundColor: '#6c5ffc',
      borderColor: '#6c5ffc',
      borderWidth: 2,
      fill: false,
      tension: 0.4,
      data: [250, 200, 220, 400, 250, 350]
    },
    {
      type: 'line',
      label: 'Dataset 2',
      backgroundColor: '#05c3fb',
      borderColor: '#05c3fb',
      borderWidth: 2,
      tension: 0.2,
      data: [100, 130, 150, 240, 130, 220],
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: '#6c5ffc',
      data: [100, 130, 150, 240, 130, 220],

    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
}

export function Chartdetails() {
  return <Chart type='bar' data={data} options={options} className="appchart" />;
}
