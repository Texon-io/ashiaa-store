import { create } from "zustand";

export const categoriesStore = create((set) => ({
  category: "All",
  categories: [
    "All",
    "Accessories",
    "Bedroom",
    "Chairs",
    "Kitchen",
    "Sitting Room",
  ],

  setCategory: (cat) => set({ category: cat }),
}));
