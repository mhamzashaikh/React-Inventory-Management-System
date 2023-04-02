import React, { useState } from "react";
import Chart from "react-apexcharts";

function Dashboard() {
  const [chart, setChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <>
      <div className="bg-gray-200 grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4  p-4 ">
        <article class="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6  ">
          <div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <span class="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong class="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span class="text-2xl font-medium text-gray-900"> $404.32 </span>

              <span class="text-xs text-gray-500"> from $240.94 </span>
            </p>
          </div>
        </article>

        <article class="flex flex-col  gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
          <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>

            <span class="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong class="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span class="text-2xl font-medium text-gray-900"> $240.94 </span>

              <span class="text-xs text-gray-500"> from $404.32 </span>
            </p>
          </div>
        </article>
        <article class="flex flex-col   gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
          <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>

            <span class="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong class="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span class="text-2xl font-medium text-gray-900"> $240.94 </span>

              <span class="text-xs text-gray-500"> from $404.32 </span>
            </p>
          </div>
        </article>
        <article class="flex flex-col   gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
          <div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>

            <span class="text-xs font-medium"> 67.81% </span>
          </div>

          <div>
            <strong class="block text-sm font-medium text-gray-500">
              {" "}
              Profit{" "}
            </strong>

            <p>
              <span class="text-2xl font-medium text-gray-900"> $240.94 </span>

              <span class="text-xs text-gray-500"> from $404.32 </span>
            </p>
          </div>
        </article>
        <div className="flex bg-white rounded-lg py-8 col-span-full justify-center">
          <Chart
            options={chart.options}
            series={chart.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
