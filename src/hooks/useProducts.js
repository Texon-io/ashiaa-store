import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getData } from "../api/products";
import { ALL_PRODUCTS_KEY } from "./useAllProducts";

export default function useProducts(
  category,
  enabled = true,
  bestSeller = false,
) {
  const queryClient = useQueryClient();
  const key = ["products", { category, bestSeller }];

  return useQuery({
    queryKey: key,
    queryFn: () => getData(category, bestSeller),
    enabled,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,

    initialData: () => {
      const all = queryClient.getQueryData(ALL_PRODUCTS_KEY);
      if (!all) return undefined;
      const slice = all.filter((p) => p.category === category);
      return slice.length > 0 ? slice : undefined;
    },

    initialDataUpdatedAt: () =>
      queryClient.getQueryState(ALL_PRODUCTS_KEY)?.dataUpdatedAt,
  });
}
