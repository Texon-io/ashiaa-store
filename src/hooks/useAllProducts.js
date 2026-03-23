import { useMemo } from "react";
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

export const ALL_PRODUCTS_KEY = ["products", ""];

export default function useAllProducts(enabled = true) {
  const queryClient = useQueryClient();

  const {
    data: mainAllData,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ALL_PRODUCTS_KEY,
    queryFn: () => getData(""),
    enabled,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useMemo(() => {
    if (!mainAllData) return;
    ALL_CATEGORIES.forEach((cat) => {
      const key = ["products", { category: cat, bestSeller: false }];
      if (!queryClient.getQueryData(key)) {
        queryClient.setQueryData(
          key,
          mainAllData.filter((p) => p.category === cat),
        );
      }
    });
  }, [mainAllData, queryClient]);

  const products =
    mainAllData ?? queryClient.getQueryData(ALL_PRODUCTS_KEY) ?? [];

  return {
    products,
    isLoading: enabled && isLoading && products.length === 0,
    isError,
    error,
  };
}
