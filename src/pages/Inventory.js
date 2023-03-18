import React from "react";

function Inventory() {
  return (
    <div className="col-span-12 lg:col-span-10 bg-red-200 flex justify-center">
      <div className=" flex flex-col gap-5 w-11/12">
        <div className="bg-white rounded">
          <span className="font-bold ">Overall Inventory</span>
          <div className=" flex flex-col md:flex-row justify-center items-center  ">
            <div className="flex flex-col p-10  w-full  md:w-3/12  ">
              <span className="font-bold text-blue-600 text-base">
                Categories
              </span>
              <span className="font-bold text-gray-600 text-base">14</span>
              <span className="font-thin text-gray-400 text-xs">
                Last 7 days
              </span>
            </div>
            <div className="flex flex-col gap-3 p-10   w-full  md:w-3/12 sm:border-y-2  md:border-x-2 md:border-y-0">
              <span className="font-bold text-yellow-600 text-base">
                Total Products
              </span>
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-600 text-base">868</span>
                  <span className="font-thin text-gray-400 text-xs">
                    Last 7 days
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-600 text-base">
                    $2000
                  </span>
                  <span className="font-thin text-gray-400 text-xs">
                    Revenue
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-10  w-full  md:w-3/12  sm:border-y-2 md:border-x-2 md:border-y-0">
              <span className="font-bold text-purple-600 text-base">
                Top Selling
              </span>
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-600 text-base">5</span>
                  <span className="font-thin text-gray-400 text-xs">
                    Last 7 days
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-600 text-base">
                    $1500
                  </span>
                  <span className="font-thin text-gray-400 text-xs">Cost</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-10  w-full  md:w-3/12  border-y-2  md:border-x-2 md:border-y-0">
              <span className="font-bold text-red-600 text-base">
                Low Stocks
              </span>
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-600 text-base">12</span>
                  <span className="font-thin text-gray-400 text-xs">
                    Ordered
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-600 text-base">2</span>
                  <span className="font-thin text-gray-400 text-xs">
                    Not in Stock
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table  */}
        <div class="overflow-x-auto rounded-lg border bg-white border-gray-200 ">
          <div className="flex justify-between pt-5 pb-3 px-3">
            <span className="font-bold">Products</span>
            <div className="flex gap-4">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs  rounded">
                Add Product
              </button>
              <button class="flex gap-2 bg-white-200 hover:bg-gray-100 border-2 text-gray font-bold p-2 text-xs  rounded">
                <img
                  className="py-1 pl-2"
                  src={require("../assets/filter-icon.png")}
                />
                Filter
              </button>
            </div>
          </div>
          <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Products
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Buying Price
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Quantity
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Expiry Date
                </th>
                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Availibility
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Maggi
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">230</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">20</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  11/04/2023
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  In Stock
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Maggi
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">230</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">20</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  11/04/2023
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  In Stock
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
