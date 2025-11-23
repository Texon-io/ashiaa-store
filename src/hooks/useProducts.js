import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/products.js";

export default function useProducts() {
  // managing data by react query
  return useQuery({
    queryKey: ["products"],
    queryFn: getData,
    staleTime: 1000 * 20,
    refetchInterval: 20000,
    refetchIntervalInBackground: false,
    retry: 2,
  });
}
