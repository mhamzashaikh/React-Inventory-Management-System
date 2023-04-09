import React, { useState } from "react";

function UploadImage({ uploadImage }) {
  const [fileName, setFileName] = useState("");

  const handleFileInputChange = (event) => {
    setFileName(event.target.files[0]);
    uploadImage(event.target.files[0]);
  };

  return (
    <div>
      <label
        htmlFor="fileInput"
        className="inline-block rounded-md shadow-sm py-2 px-4 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg
          className="w-6 h-6 inline-block mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 16V21H21V16H3ZM5 18H19V16H5V18ZM3 6H21V14H3V6ZM5 10H19V8H5V10Z"
            fill="currentColor"
          />
        </svg>
        <span className="inline-block">
          {" "}
          {fileName?.name ? fileName.name : "Choose file"}
        </span>
      </label>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept=".png, .jpeg, .jpg"
        required
        onChange={handleFileInputChange}
      />
    </div>
  );
}

export default UploadImage;
