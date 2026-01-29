import { create } from "zustand";

export const categoriesStore = create((set) => ({
  category: "الكل",
  categories: [
    "الكل",
    "دفاتر",
    "أقلام",
    "منظامت مكتب",
    "مجات",
    "شنط",
    "باكيدچات أو بوكسات",
  ],

  setCategory: (cat) => set({ category: cat }),
}));
