import React from "react";
import RatingSection from "./RatingSection";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";

function ProductCard({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) {
  const { carts, addCart } = useCartStore();
  const navigate = useNavigate();

  const jumpToDetail = () => {
    const detailPath = `/product-detail/${id}`;
    navigate(detailPath);
  }
  const handleAddCartBtn = (event) => {
    event.stopPropagation();
    const cart = {
      id: Date.now(),
      productId: id,
      quantity:1,
    };
    addCart(cart);
  }
  return (
    <div onClick={jumpToDetail} className="border px-4 py-2 flex flex-col justify-between items-start gap-2">
      <div className="w-full flex justify-center">
        <img className="h-40" src={image} alt="" />
      </div>
      <p className="font-semibold line-clamp-2">{title}</p>
      <RatingSection currentRate={rate} />
      <div className="flex justify-between w-full items-end">
        <p>{price} $</p>
        {carts.find((cart) => cart.productId == id) ? (
          <button disabled className="border text-sm px-2 py-1 cursor-pointer bg-gray-600 text-white hover:bg-gray-500">
            Added
          </button>
        ) : (
          <button onClick={handleAddCartBtn} className="border text-sm px-2 py-1 cursor-pointer hover:bg-gray-200">
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
