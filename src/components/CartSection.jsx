import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import emptyImage from "../assets/empty.png";
import useProductStore from "../store/useProductStore";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const productPrice = products.find((el) => el.id == cv.productId).price;
    return pv + productPrice * cv.quantity;
  }, 0);

  const tax = total * 0.03;
  const netTotal = tax + total;
  return (
    <>
      <div className="flex flex-col gap-3 flex-grow">
        {carts.length == 0 ? (
          <img src={emptyImage} alt="Empty" className="xl:w-1/4 lg:w-1/3 w-1/2 mx-auto mt-5" />
        ) : (
          carts.map((cart) => <Cart key={cart.id} carted={cart} />)
        )}

        <div className="border-t py-2 mt-auto">
          <div className="flex justify-end gap-15 mb-3">
            <div>
              <h2 className="text-gray-500 mb-3">Total</h2>
              <p className="text-gray-700 font-bold text-lg">{total.toFixed(2)}$</p>
            </div>
            <div>
              <h2 className="text-gray-500 mb-3">Tax (3%)</h2>
              <p className="text-gray-700 font-bold text-lg">{tax.toFixed(2)}$</p>
            </div>
            <div>
              <h2 className="text-gray-500 mb-3">Net Total</h2>
              <p className="text-gray-700 font-bold text-lg">{netTotal.toFixed(2)}$</p>
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
