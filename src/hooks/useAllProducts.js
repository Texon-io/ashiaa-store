import { useEffect, useMemo } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getData } from "../api/products";

const ALL_CATEGORIES = [
  "دفاتر",
  "أقلام",
  "شنط",
  "مجات",
  "منظمات مكتب",
  "باكيدچات أو بوكسات",
  "أخرى",
];

/**
 * Hook to fetch all products and prefetch category-specific data
 */
export default function useAllProducts(enabled = true) {
  const queryClient = useQueryClient();

  // Fetch main "all" data
  const {
    data: mainAllData,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", ""],
    queryFn: () => getData(""),
    enabled: enabled,

    // Keep consistent with useProducts logic
    staleTime: 1000 * 60 * 1,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });

  // Prefetch all categories data in the background
  useEffect(() => {
    if (!enabled) return;

    ALL_CATEGORIES.forEach((cat) => {
      // IMPORTANT: Unified queryKey to match useProducts hook structure
      // This ensures that when a user switches to a category, the data is already in cache
      const categoryKey = ["products", { category: cat, bestSeller: false }];

      if (!queryClient.getQueryData(categoryKey)) {
        queryClient.prefetchQuery({
          queryKey: categoryKey,
          queryFn: () => getData(cat, false),
          staleTime: 1000 * 60 * 1,
        });
      }
    });
  }, [enabled, queryClient]);

  // Aggregate products from the most reliable source available
  const products = useMemo(() => {
    if (!enabled) return [];

    // Priority 1: Current fetch result for "All"
    if (mainAllData) return mainAllData;

    // Priority 2: Existing cache for the "all" key
    const allCached = queryClient.getQueryData(["products", ""]);
    if (allCached) return allCached;

    // Priority 3: Combine data from individual category caches using the unified Object Key
    return ALL_CATEGORIES.flatMap((cat) => {
      const cachedData = queryClient.getQueryData([
        "products",
        { category: cat, bestSeller: false },
      ]);
      return cachedData || [];
    });
  }, [enabled, queryClient, mainAllData]);

  const isLoading = enabled && products.length === 0;

  return { products, isLoading, isError, error };
}
