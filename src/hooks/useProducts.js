import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/products.js";

/**
 * Hook for fetching products based on a specific category
 */
export default function useProducts(
  category = "",
  enabled = true,
  bestSeller = false
) {
  return useQuery({
    queryKey: ["products", { category, bestSeller }],
    queryFn: () => getData(category, bestSeller),
    enabled,

    // Logic optimizations:
    staleTime: 1000 * 60 * 1, // Data is considered fresh for 1 minutes
    gcTime: 1000 * 60 * 30, // Keep unused data in memory for 30 minutes

    // Automatic sync triggers:
    refetchOnWindowFocus: true, // Sync data when user returns to the tab
    refetchOnMount: true, // Sync data when the component re-mounts

    retry: 2, // Retry failed requests twice
  });
}
