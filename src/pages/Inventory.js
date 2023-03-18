import React from "react";

function Inventory() {
  return (
    <div className="col-span-9 bg-red-200 place-items-center">
      <div class="overflow-x-auto rounded-lg border bg-white border-gray-200">
        <span className="font-bold">Products</span>
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
  );
}

export default Inventory;
