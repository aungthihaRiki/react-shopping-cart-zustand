import { create } from "zustand";

const useCartStore = create((set) => ({
  carts: [
    {
      id: 1,
      productId: 2,
      quantity: 3,
    },
    {
      id: 2,
      productId: 4,
      quantity: 3,
    },
  ],
  addCart: () => {},
  removeCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
}));

export default useCartStore;