import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId) => {
      const response = await fetch(import.meta.env.VITE_GOOGLE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ action: "DELETE", id: productId }),
      });
      return response.json();
    },
    onSuccess: () => {
      // Invalidate the "products" key to force a background refresh
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
