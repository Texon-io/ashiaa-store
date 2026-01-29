import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  getAllProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "./apiAllProducts.js";

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

  // Calculated values
  const productsCount = products.length;

  const bestSellingProducts = products
    .slice()
    .filter((p) => p.best_seller && p.best_seller > 0);

  const categoryStats = products.reduce((acc, product) => {
    const cat = product.category || "Uncategorized";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const numCategories = Object.keys(categoryStats).length;

  // Mutations for adding, deleting, and editing products

  // 2. Adding a product
  const { mutate: addProductMutate, isLoading: isAdding } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      toast.success("تم إضافة المنتج بنجاح");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => toast.error(err.message),
  });

  // 3. Deleting a product
  const { mutate: deleteProductMutate, isLoading: isDeleting } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast.success("تم مسح المنتج");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => toast.error(err.message),
  });

  // 4. Editing a product
  const { mutate: editProductMutate, isLoading: isEditing } = useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      toast.success("تم تعديل المنتج بنجاح");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    status,
    products,
    productsCount,
    numCategories,
    categoryStats,
    bestSellingProducts,
    error,
    isLoading,

    isAdding,
    isDeleting,
    isEditing,
    addProduct: addProductMutate,
    deleteProduct: deleteProductMutate,
    editProduct: editProductMutate,
  };
}
