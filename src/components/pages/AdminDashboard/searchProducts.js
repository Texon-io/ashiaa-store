import { create } from "zustand";

export const useSearchStore = create((set) => ({
  searchTerm: "",
  setSearch: (term) => set({ searchTerm: term }),
}));
