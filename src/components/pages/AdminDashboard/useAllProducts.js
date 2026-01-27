import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "@/services/apiAllProducts.js";

export function useAllProducts(category) {
  const queryClient = useQueryClient();

  // 1. Get products
  const {
    data: products = [],
    error,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["products", category],
    queryFn: () => getAllProducts({ category }),
  });

  // Calculates
  const productsCount = products.length;

  const categoryStats = products.reduce((acc, product) => {
    const cat = product.category || "Uncategorized";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const numCategories = Object.keys(categoryStats).length;

  // 2. Adding a product
  const { mutate: addProductMutate } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]); // Update the cache
    },
  });

  // 3. Deleting a product
  const { mutate: deleteProductMutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  // 4. Editing a product
  const { mutate: editProductMutate } = useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  return {
    status,
    products,
    productsCount,
    numCategories,
    categoryStats,
    error,
    isLoading,
    addProduct: addProductMutate,
    deleteProduct: deleteProductMutate,
    editProduct: editProductMutate,
  };
}
