import React from "react";
import CategoriesButton from "./CategoriesButton";
import Container from "./Container";
import useCategoryStore from "../store/useCategoryStore";

const CategoriesSection = () => {
  const { categories } = useCategoryStore();

  return (
    <div className="mb-3">
      <Container>
        <h2 className="text-2xl text-gray-400 mb-2 font-semibold">
          Product Categories
        </h2>
        <div className="flex overflow-x-scroll scrollbar-hide">
          {categories.map((category) => (
            <CategoriesButton
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoriesSection;
