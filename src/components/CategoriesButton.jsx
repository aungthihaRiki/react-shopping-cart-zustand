import React from "react";

function CategoriesButton({ id, categoryName, current }) {
  return (
    <button
      key={id}
      className={`${
        current && "bg-black text-white hover:bg-gray-700"
      } mr-2 px-3 py-2 text-sm border cursor-pointer hover:bg-gray-200 uppercase text-nowrap`}
    >
      {categoryName}
    </button>
  );
}

export default CategoriesButton;
