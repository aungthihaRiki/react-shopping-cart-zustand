import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";

const Cart = ({ carted: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { removeCart, increaseQuantity, decreaseQuantity } = useCartStore();

  const currentProduct = products.find((product) => product.id == productId);
  const cost = currentProduct.price * quantity;

  const handleRemoveBtn = () => {
    confirm("Are you sure to delete?") && removeCart(id);
  };

  const handleIncreaseBtn = () => {
    increaseQuantity(id);
  };

  const handleDecreaseBtn = () => {
    if (quantity <= 1) {
      confirm("Are you sure to delete?") && removeCart(id);
    } else {
      decreaseQuantity(id);
    }
  };

  return (
    <div className="relative grid grid-cols-6 gap-2 border px-5 py-3">
      <div className="col-span-1">
        <img
          src={currentProduct.image}
          className="h-20 mx-auto"
          alt={currentProduct.title}
        />
      </div>
      <div className="col-span-3">
        <h1 className="font-bold text-md text-gray-800 mb-3">
          {currentProduct.title}
        </h1>
        <p className="text-gray-500 font-bold">{currentProduct.price} $</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <h1 className="font-bold text-gray-800 mb-3">Quantity</h1>
        <div className="flex gap-2 items-center">
          <button
            onClick={handleDecreaseBtn}
            className="px-1.5 py-0.5 border cursor-pointer hover:bg-gray-400 active:scale-95 active:duration-100"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={handleIncreaseBtn}
            className="px-1.5 py-0.5 border cursor-pointer hover:bg-gray-400 active:scale-95 active:duration-100"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1 text-end flex flex-col justify-center">
        <p className="font-bold text-xl">{cost} $</p>
      </div>
      <button 
      onClick={handleRemoveBtn}
      className="cursor-pointer bg-red-200 hover:bg-red-300 active:scale-90 hover:duration-100 absolute p-1 rounded-full right-0 translate-x-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Cart;
