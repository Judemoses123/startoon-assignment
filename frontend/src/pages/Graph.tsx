import { useEffect, useState } from "react";
import Navbar from "../components/navigationComponents/Navbar";
import { getMonthlyLogin } from "../utils/getMonthlyLogin";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";

const Graph = () => {
  Chart.register(CategoryScale, LinearScale, BarElement);
  const [monthlyCount, setMonthlyCount] = useState([]);
  useEffect(() => {
    async function asyncFunction() {
      console.log("fetching monhtly logins");
      const monthlyDataResponse = await getMonthlyLogin();
      console.log(monthlyDataResponse);
      if (!monthlyDataResponse || !monthlyDataResponse.monthlyLogin) return;
      setMonthlyCount(monthlyDataResponse.monthlyLogin);
    }
    asyncFunction();
  }, []);
  const reversedMonthlyCount = [...monthlyCount].reverse();
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Monthly Logins",
      },
    },
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
        },
        ticks: {
          stepSize: 1, // Ensure that the y-axis uses whole number increments
          callback: function (value: any) {
            if (Number.isInteger(value)) {
              return value; // Show only whole numbers
            }
          },
        },
      },
    },
  };

  const data = {
    labels: reversedMonthlyCount.map((month: any) => month.month),
    datasets: [
      {
        label: "Users Logins",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderColor: "rgb(0, 255, 0)",
        borderWidth: 1,
        data: reversedMonthlyCount.map((month: any) => month.count),
      },
    ],
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-stretch">
      <Navbar />
      <div className=" flex w-2/3 gap-2 border p-2 mt-10">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
export default Graph;
