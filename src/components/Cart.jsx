import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="grid grid-cols-6 gap-2 border px-5 py-3">
      <div className="col-span-1">
        <img
          src={cart.product.image}
          className="h-20 mx-auto"
          alt={cart.product.title}
        />
      </div>
      <div className="col-span-3">
        <h1 className="font-semibold text-md text-gray-800 mb-3">
          {cart.product.title}
        </h1>
        <p className="text-gray-400">{cart.product.price} $</p>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <h1 className="font-semibold text-gray-800 mb-3">Quentity</h1>
        <div className="flex gap-2 items-center">
          <button className="px-1.5 py-0.5 border cursor-pointer hover:bg-gray-400 active:scale-95 active:duration-100">
            -
          </button>
          <span>{cart.quantity}</span>
          <button className="px-1.5 py-0.5 border cursor-pointer hover:bg-gray-400 active:scale-95 active:duration-100">
            +
          </button>
        </div>
      </div>
      <div className="col-span-1 text-end flex flex-col justify-center">
        <p className="font-bold">{cart.cost} $</p>
      </div>
    </div>
  );
};

export default Cart;
