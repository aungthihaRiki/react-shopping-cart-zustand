import React from "react";
import CategoriesButton from "./CategoriesButton";
import Container from "./Container";
const categories = [
  { id: 1, name: "electronics" },
  { id: 2, name: "jewelery" },
  { id: 3, name: "men's clothing" },
  { id: 4, name: "women's clothing" },
  { id: 5, name: "bady clothing" },
];

const CategoriesSection = () => {
  return (
    <div className="mb-3">
      <Container>
        <h2 className="text-2xl text-gray-400 mb-2 font-semibold">
          Product Categories
        </h2>
        <div className="flex overflow-x-scroll scrollbar-hide">
          <CategoriesButton key={"all"} categoryName="All" current={true} />
          {categories.map((category) => (
            <CategoriesButton
              key={category.id}
              categoryName={category.name}
              current={false}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoriesSection;
