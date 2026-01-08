import { useEffect, useMemo } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query"; // أضفنا useQuery
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

export default function useAllProducts(enabled = true) {
  const queryClient = useQueryClient();

  // Fetch main "all" data
  const { data: mainAllData } = useQuery({
    queryKey: ["products", ""],
    queryFn: () => getData(""),
    enabled: enabled, // Enable or disable based on the parameter
    staleTime: 1000 * 60 * 5, // 5 min
  });

  // Prefetch all categories data in the background
  useEffect(() => {
    if (!enabled) return;

    ALL_CATEGORIES.forEach((cat) => {
      if (!queryClient.getQueryData(["products", cat])) {
        queryClient.prefetchQuery({
          queryKey: ["products", cat],
          queryFn: () => getData(cat),
        });
      }
    });
  }, [enabled, queryClient]);

  // Collect all products from cache or main data
  const products = useMemo(() => {
    if (!enabled) return [];

    // If we have main "all" data, use it
    if (mainAllData) return mainAllData;

    // Fallback to cached data
    const allCached = queryClient.getQueryData(["products", ""]);
    if (allCached) return allCached;

    // Get all data from individual category caches
    return ALL_CATEGORIES.flatMap(
      (cat) => queryClient.getQueryData(["products", cat]) || []
    );
  }, [enabled, queryClient, mainAllData]);

  // If the hook is enabled and products are still empty, we are loading
  const isLoading = enabled && products.length === 0;

  return { products, isLoading };
}
