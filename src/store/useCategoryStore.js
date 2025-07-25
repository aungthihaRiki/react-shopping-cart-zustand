import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: [
    { id: 1, name: "All", isActive: true },
    { id: 2, name: "electronics", isActive: false },
    { id: 3, name: "jewelery", isActive: false },
    { id: 4, name: "men's clothing", isActive: false },
    { id: 5, name: "women's clothing", isActive: false },
    { id: 6, name: "bady clothing", isActive: false },
  ],
  activeToggle: (categoryId) => {
    set((state) => ({
      categories: state.categories.map((el) =>
        el.id === categoryId
          ? { ...el, isActive: true }
          : { ...el, isActive: false }
      ),
    }));
  },
}));

export default useCategoryStore;
