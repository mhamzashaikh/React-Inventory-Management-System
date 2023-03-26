import React, { useState } from "react";
import AddStore from "./components/AddStore";

function Store() {
  const [showModal, setShowModal] = useState(false);

  const modalSetting = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="col-span-12 lg:col-span-10 border-2 flex justify-center ">
      <div className=" flex flex-col gap-5 w-11/12 border-4">
        <div className="flex justify-between">
          <span className="font-bold">Manage Store</span>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs  rounded"
            onClick={modalSetting}
          >
            Add Store
          </button>
        </div>
        {showModal && <AddStore />}

        <div className="bg-white w-50 h-fit flex flex-col gap-4 p-4 ">
          <div>
            <img
              className="h-60 w-full object-cover"
              src={require("../assets/store-image.jpg")}
            />
          </div>
          <div className="flex flex-col gap-3 justify-between items-start">
            <span className="font-bold">Fresh Market</span>
            <div className="flex">
              <img
                className="h-6 w-6"
                src={require("../assets/location-icon.png")}
              />
              <span>1275 Main Street, Suite A, Greenfield, MA 01301</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
