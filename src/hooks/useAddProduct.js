import { useMutation, useQueryClient } from "@tanstack/react-query";

/**
 * Hook to handle adding a new product and refreshing the cache
 */
export default function useAddProduct(uploadFunction) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadFunction, // This is your uploadProductLogic
    onSuccess: () => {
      // Invalidate the "products" key to force a background refresh
      // This tells React Query that any query starting with ["products"] is now old
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
