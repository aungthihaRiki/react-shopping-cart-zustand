import React from "react";
import carts from "../data/carts";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const CartSection = () => {
  return (
    <>
      <div className="flex flex-col gap-3 flex-grow">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}

        <div className="border-t py-2 mt-auto">
          <div className="flex justify-end gap-15 mb-3">
            <div>
              <h2 className="text-gray-500 mb-3">Total</h2>
              <p className="text-gray-700 font-bold text-lg">100$</p>
            </div>
            <div>
              <h2 className="text-gray-500 mb-3">Tax (%)</h2>
              <p className="text-gray-700 font-bold text-lg">100$</p>
            </div>
            <div>
              <h2 className="text-gray-500 mb-3">Net Total</h2>
              <p className="text-gray-700 font-bold text-lg">100$</p>
            </div>
          </div>
          <div className="text-end">
            <Link className="mx-auto border text-lg px-5 py-1 cursor-pointer hover:bg-gray-200">
              Order Now
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default CartSection;
