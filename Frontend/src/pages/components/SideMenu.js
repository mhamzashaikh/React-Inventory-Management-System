import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));

  return (
    <div class="col-span-2  h-screen flex-col justify-between border-r bg-white hidden lg:flex">
      <div class="px-4 py-6">
        <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
          <Link to="/">
            <a
              href="#"
              class="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
            >
              <img src={require("../../assets/dashboard-icon.png")} />
              <span class="text-sm font-medium"> Dashboard </span>
            </a>
          </Link>

          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <Link to="/inventory">
                <div class="flex items-center gap-2">
                  <img src={require("../../assets/inventory-icon.png")} />{" "}
                  <span class="text-sm font-medium"> Inventory </span>
                </div>
              </Link>
            </summary>
          </details>

          {/* <a
            href="#"
            class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <img src={require("../../assets/reports-icon.png")} />
            <span class="text-sm font-medium"> Reports </span>
          </a> */}

          <Link to="/sales">
            <a
              href="#"
              class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <img src={require("../../assets/supplier-icon.png")} />
              <span class="text-sm font-medium"> Sales</span>
            </a>
          </Link>

          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <Link to="/manage-store">
                <div class="flex items-center gap-2">
                  <img src={require("../../assets/order-icon.png")} />
                  <span class="text-sm font-medium"> Manage Store </span>
                </div>
              </Link>
            </summary>
          </details>
        </nav>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt="Man"
            src={localStorageData.imageUrl}
            class="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p class="text-xs">
              <strong class="block font-medium">
                {localStorageData.firstName + " " + localStorageData.lastName}
              </strong>

              <span> {localStorageData.email} </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SideMenu;
