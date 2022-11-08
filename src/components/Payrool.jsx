import React from "react";
import { MdPayments } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Compensations",
    },
  },
};
const labels = [
  "Cycle1",
  "Cycle2",
  "Cycle2",
  "Cycle3",
  "Cycle4",
  "cycle5",
  "Cycle6",
  "Cycle7",
];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#166534",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#10b981",
    },
  ],
};
const Payrool = () => {
  return (
    <div className="w-full shadow-sm bg-white text-gray-700 my-5 ">
      <header className="flex justify-between items-center gap-3 py-3 shadow-sm  px-8">
        <div className="flex justify-center items-center gap-2">
          <div className="p-2 bg-green-600 rounded-full">
            <MdPayments className="  text-white " />
          </div>
          <h1 className="font-bold text-md">Payroll</h1>
        </div>
      </header>
      <div className="flex flex-row pb-2 ">
        <div className="basis-1/3 px-8 my-2 py-4">
          <h3 className="font-semibold font-sans text-sm text-gray-500">
            Setup Payroll to calculate your total compensation of each cycle
          </h3>
          <h1 className="text-3xl font-bold my-3">$*******00</h1>
          <button className="bg-green-500 px-4 py-2 flex items-center gap-1 text-white rounded-md font-bold">
            Set up now
            <BsChevronDown className="font-bold" />
          </button>
        </div>
        <div className="basis-2/3 pr-2 ">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Payrool;
