import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/products.js";

// function for fetching data from Google Apps Script

export default function useProducts(category = "", enabled = true) {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => getData(category),
    enabled,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
}
