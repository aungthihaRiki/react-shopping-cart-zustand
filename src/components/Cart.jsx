import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";

const Cart = ({ carted: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity } = useCartStore();


  const currentProduct = products.find((product) => product.id == productId);
  const cost = currentProduct.price * quantity;

  const handleIncreaseBtn = () => {
    increaseQuantity(id);
  };

  const handleDecreaseBtn = () => {
    if (quantity <= 1) {
      confirm("Are you sure to delete?");
    } else {
      decreaseQuantity(id);
    }
  };

  return (
    <div className="grid grid-cols-6 gap-2 border px-5 py-3">
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
    </div>
  );
};

export default Cart;
