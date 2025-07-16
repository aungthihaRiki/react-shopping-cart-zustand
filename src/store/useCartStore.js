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
  removeCart: (cartId) => {
    set((state) => ({
        carts: state.carts.filter(cart => cart.id !== cartId )
    }))
  },
  increaseQuantity: (cartId) => {
    set((state) => ({
      carts: state.carts.map((cart) =>
        cart.id === cartId ? { ...cart, quantity: cart.quantity + 1 } : { ...cart }
      ),
    }));
  },
  decreaseQuantity: (cartId) => {
    set((state) => ({
      carts: state.carts.map((cart) =>
        cart.id === cartId ? { ...cart, quantity: cart.quantity - 1 } : { ...cart }
      ),
    }));
  },
}));

export default useCartStore;
