import React from "react";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  plugins,
  PointElement,
  scales,
  Tooltip,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { getLast7Days } from "../../lib/features";
import { orange, purple, purpleLight } from "../../constants/color";

ChartJS.register(
  CategoryScale,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const labels = getLast7Days();
const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  },
};
const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        data: [0, 15, 6, 20, 18, 19, 20, 30],
        label: "Revenue 2",
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  cutout: 120,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Total Chats Vs Group Chats",
        backgroundColor: [purpleLight, orange],
        hoverBackgroundColor: [purple, orange],
        borderColor: [purple, orange],
        offset: 40,
      },
    ],
  };

  return (
    <Doughnut
      style={{ zIndex: 10 }}
      data={data}
      options={doughnutChartOptions}
    />
  );
};
export { LineChart, DoughnutChart };
