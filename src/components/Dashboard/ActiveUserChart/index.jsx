import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const toReadableDate = (date) => {
  const year = date.slice(0, 4)
  const month = date.slice(4, 6)
  const day = date.slice(6, 8)
  return year + ' / ' + month + ' / ' + day
}

const ActiveUsersChart = ({ data }) => {
  const chartData = {
    labels: data.map((row) => toReadableDate(row.dimensionValues[0].value)),
    datasets: [
      {
        label: "Active Users",
        data: data.map((row) => row.metricValues[0].value),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default ActiveUsersChart;
