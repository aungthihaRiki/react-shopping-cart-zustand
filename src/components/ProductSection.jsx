import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import useProductStore from "../store/useProductStore";

function ProductSection() {
  const { products } = useProductStore();

  return (
    <Container>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}

export default ProductSection;
