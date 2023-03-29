import React, { useState, useEffect } from "react";
import AddSale from "./components/AddSale";

function Sales() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [products, setAllProducts] = useState([]);
  const [stores, setAllStores] = useState([]);
  const [updatePage, setUpdatePage] = useState(true);
  console.log("Modal: ", showProductModal);
  console.log("UPDATE:: ", updatePage);


  useEffect(() => {
    fetchProductsData();
    fetchStoresData();
  }, [updatePage]);

  // Fetching Data of All Products
  const fetchProductsData = () => {
    fetch("http://localhost:4000/api/product/get")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  };

  // Fetching Data of All Stores
  const fetchStoresData = () => {
    fetch("http://localhost:4000/api/store/get")
      .then((response) => response.json())
      .then((data) => {
        setAllStores(data);
      });
  };

  // Modal for Product ADD
  const addProductModalSetting = () => {
    setShowProductModal(!showProductModal);
  };

  return (
    <div className="col-span-12 lg:col-span-10  flex justify-center">
      <div className=" flex flex-col gap-5 w-11/12">
        {showProductModal && (
          <AddSale
            addProductModalSetting={addProductModalSetting}
            products={products}
            stores={stores}
          />
        )}
        {/* Table  */}
        <div class="overflow-x-auto rounded-lg border bg-white border-gray-200 ">
          <div className="flex justify-between pt-5 pb-3 px-3">
            <div className="flex gap-4 justify-center items-center ">
              <span className="font-bold">Products</span>
              <div className="flex justify-center items-center px-2 border-2 rounded-md ">
                <img
                  className="w-5 h-5"
                  src={require("../assets/search-icon.png")}
                />
                <input
                  className="border-none outline-none focus:border-none text-xs"
                  type="text"
                  placeholder="Search here"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs  rounded"
                onClick={addProductModalSetting}
              >
                {/* <Link to="/inventory/add-product">Add Product</Link> */}
                Add Sales
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
                  Manufacturer
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
              {products.map((element, index) => {
                return (
                  <tr>
                    <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                      {element.name}
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      {element.manufacturer}
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      {element.price}
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      {element.quantity}
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      11/04/2023
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      In Stock
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sales;
