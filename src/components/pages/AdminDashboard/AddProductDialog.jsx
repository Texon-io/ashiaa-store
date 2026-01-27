import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ButtonShadcn } from "@/components/ui/button-shadcn";
import { Input as ShadInput } from "@/components/ui/input-shadcn";
import { Label } from "@/components/ui/label";
import { ImagePlus, X } from "lucide-react";
import CustomSelect from "./CustomSelect";
import { useAllProducts } from "./useAllProducts";
import { toast } from "sonner";

const categories = [
  { id: "All", label: "All" },
  { id: "Accessories", label: "Accessories" },
  { id: "Bedroom", label: "Bedroom" },
  { id: "Chairs", label: "Chairs" },
  { id: "Kitchen", label: "Kitchen" },
  { id: "Sitting Room", label: "Sitting Room" },
];

export default function AddProductDialog({
  open,
  setOpen,
  productToEdit = null,
}) {
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const fileInputRef = useRef(null);
  const { addProduct, editProduct } = useAllProducts();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (productToEdit) {
      setSelectedCategory(productToEdit.category);
      setImage(productToEdit.image_url || null);
    } else {
      setSelectedCategory("All");
      setImage(null);
    }
  }, [productToEdit, open]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const removeImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      title: e.target.title.value,
      description: e.target.desc.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      discount: 0,
      category: selectedCategory,
      image_url: image,
    };

    // Check if the product is being edited
    if (productToEdit) {
      editProduct({ id: productToEdit.id, updatedData: productData });
      toast.success("Product updated successfully!");
    } else {
      addProduct(productData);
      toast.success("Product added successfully!");
    }

    setOpen(false);
    setImage(null);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {productToEdit ? "Edit Product" : "Add New Product"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2 text-left">
            <Label htmlFor="title">Product Title</Label>
            <ShadInput
              id="title"
              name="title"
              defaultValue={productToEdit?.title || ""} // Set the default value
              placeholder="e.g. Modern Leather Sofa"
              className="focus:ring-[#7C71DF] focus:border-[#7C71DF]"
              required
            />
          </div>

          <div className="space-y-2 text-left">
            <Label htmlFor="desc">Description</Label>
            <textarea
              id="desc"
              name="desc"
              defaultValue={productToEdit?.description || ""}
              placeholder="Tell customers more about the product..."
              className="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none focus:ring-[#7C71DF] focus:border-[#7C71DF]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="space-y-2">
              <Label htmlFor="add-product-category">Category</Label>
              <CustomSelect
                id={`add-product-category`}
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                options={categories}
                placeholder="Filter by Category"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price ($)</Label>
              <ShadInput
                id="price"
                name="price"
                defaultValue={productToEdit?.price || ""}
                className="py-4.5 focus:ring-[#7C71DF] focus:border-[#7C71DF]"
                type="number"
                placeholder="0.00"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock">Stock Quantity</Label>
              <ShadInput
                id="stock"
                name="stock"
                defaultValue={productToEdit?.stock || ""}
                className="py-4.5 focus:ring-[#7C71DF] focus:border-[#7C71DF]"
                type="number"
                placeholder="10"
                required
              />
            </div>
          </div>

          <div className="space-y-3 text-left">
            <Label>Product Image</Label>
            <div className="flex gap-4">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageChange}
              />

              {image ? (
                <div className="relative group aspect-square w-32 rounded-lg overflow-hidden border shadow-sm">
                  <img
                    // Display the uploaded image
                    src={
                      typeof image === "string"
                        ? image
                        : URL.createObjectURL(image)
                    }
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-80 hover:opacity-100 transition shadow-md"
                  >
                    <X size={12} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="aspect-square w-32 cursor-pointer flex flex-col items-center justify-center border-2 border-dashed rounded-lg text-gray-400 hover:text-brand-main hover:border-brand-main transition bg-gray-50/50 hover:bg-gray-50"
                >
                  <ImagePlus size={24} />
                  <span className="text-[10px] mt-1 font-medium">
                    Upload Image
                  </span>
                </button>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t">
            <ButtonShadcn
              variant="outline"
              className="flex-1 cursor-pointer"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancel
            </ButtonShadcn>
            <ButtonShadcn
              type="submit"
              className="flex-1 bg-brand-main text-white hover:bg-brand-main/90 transition-colors"
            >
              {productToEdit ? "Update Product" : "Save Product"}
            </ButtonShadcn>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
