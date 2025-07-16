import React, { act } from "react";
import useCategoryStore from "../store/useCategoryStore";

function CategoriesButton({ category: { id, name, isActive } }) {
  const { activeToggle } = useCategoryStore();
  const handleClickBtn = () => {
    activeToggle(id);
  };

  return (
    <button
      key={id}
      onClick={handleClickBtn}
      className={`${
        isActive && "bg-black text-white hover:bg-gray-700"
      } mr-2 px-3 py-2 text-sm border cursor-pointer hover:bg-gray-200 uppercase text-nowrap`}
    >
      {name}
    </button>
  );
}

export default CategoriesButton;
