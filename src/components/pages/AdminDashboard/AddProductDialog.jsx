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
import { ImagePlus, X, Images } from "lucide-react";
import CustomSelect from "./CustomSelect";
import { useAllProducts } from "./useAllProducts";

const categories = [
  { id: "باكيدچات أو بوكسات", label: "باكيدچات أو بوكسات" },
  { id: "منظمات مكتب", label: "منظمات مكتب" },
  { id: "دفاتر", label: "دفاتر" },
  { id: "أقلام", label: "أقلام" },
  { id: "مجات", label: "مجات" },
  { id: "شنط", label: "شنط" },
  { id: "أخرى", label: "أخرى" },
];

export default function AddProductDialog({
  open,
  setOpen,
  productToEdit = null,
}) {
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("دفاتر");
  const [isBestSeller, setIsBestSeller] = useState(false);

  const mainFileRef = useRef(null);
  const additionalFilesRef = useRef(null);
  const { addProduct, editProduct, isAdding, isEditing } = useAllProducts();

  useEffect(() => {
    if (productToEdit) {
      setSelectedCategory(productToEdit.category);
      setMainImage(productToEdit.main_image || null);
      setAdditionalImages(productToEdit.additional_images || []);
      setIsBestSeller(productToEdit.best_seller);
    } else {
      setSelectedCategory("دفاتر");
      setMainImage(null);
      setAdditionalImages([]);
    }
  }, [productToEdit, open]);

  // Handle main image change
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setMainImage(file);
  };

  // Handle additional images change
  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setAdditionalImages((prev) => [...prev, ...files]);
  };

  const removeMainImage = () => {
    setMainImage(null);
    if (mainFileRef.current) mainFileRef.current.value = "";
  };

  const removeAdditionalImage = (index) => {
    setAdditionalImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name: e.target.name.value,
      description: e.target.desc.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      category: selectedCategory,
      main_image: mainImage,
      additional_images: additionalImages,
      best_seller: isBestSeller,
    };

    if (productToEdit) {
      editProduct({ id: productToEdit.id, updatedData: productData });
    } else {
      addProduct(productData);
    }

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {productToEdit ? "تعديل المنتج" : "إضافة منتج جديد"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {/* Product Name */}
          <div className="space-y-2 text-left">
            <Label htmlFor="name">أسم المنتج</Label>
            <ShadInput
              id="name"
              name="name"
              defaultValue={productToEdit?.name || ""}
              placeholder="أدخل أسم المنتج"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2 text-left">
            <Label htmlFor="desc">وصف المنتج</Label>
            <textarea
              id="desc"
              name="desc"
              defaultValue={productToEdit?.description || ""}
              className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus:ring-2 focus:ring-accent-dark outline-none"
            />
          </div>

          {/* Category, Price, Stock */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="space-y-2">
              <Label>الفئة</Label>
              <CustomSelect
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                options={categories}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">السعر (ج.م)</Label>
              <ShadInput
                className="h-11"
                id="price"
                name="price"
                type="number"
                defaultValue={productToEdit?.price || ""}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock">الكمية</Label>
              <ShadInput
                className="h-11"
                id="stock"
                name="stock"
                type="number"
                defaultValue={productToEdit?.stock || ""}
                required
              />
            </div>
          </div>

          {/* Best Seller Checkbox */}
          <div className="flex items-center gap-2">
            <input
              className="w-4 h-4"
              type="checkbox"
              id="best-seller"
              name="best-seller"
              checked={isBestSeller}
              onChange={(e) => setIsBestSeller(e.target.checked)}
            />
            <label
              htmlFor="best-seller"
              className="text-sm font-medium text-gray-700"
            >
              المنتج الرئيسي (الاكثر مبيعا)
            </label>
          </div>

          <div className="grid  gap-6">
            {/* Main Image Section */}
            <div className="space-y-3 text-left">
              <Label>الصورة الرئيسية</Label>
              <div className="flex flex-wrap gap-2">
                <input
                  type="file"
                  hidden
                  ref={mainFileRef}
                  onChange={handleMainImageChange}
                  accept="image/*"
                />
                {mainImage ? (
                  <div className="relative w-32 h-32 rounded-lg overflow-hidden border">
                    <img
                      src={
                        typeof mainImage === "string"
                          ? mainImage
                          : URL.createObjectURL(mainImage)
                      }
                      alt="Main"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={removeMainImage}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => mainFileRef.current.click()}
                    className="w-full h-32 transition-colors duration-300 cursor-pointer border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-accent-dark hover:text-accent-dark"
                  >
                    <ImagePlus size={24} />
                    <span className="text-[10px] mt-1">اضافة صورة</span>
                  </button>
                )}
              </div>
            </div>

            {/* Additional Images Section */}
            {/* <div className="space-y-3 text-left">
              <Label>صور إضافية للمنتج</Label>
              <div className="flex flex-wrap gap-2">
                <input
                  type="file"
                  hidden
                  multiple
                  ref={additionalFilesRef}
                  onChange={handleAdditionalImagesChange}
                  accept="image/*"
                />

                {additionalImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-20 h-20 rounded-md overflow-hidden border"
                  >
                    <img
                      src={
                        typeof img === "string" ? img : URL.createObjectURL(img)
                      }
                      alt="Gallery"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeAdditionalImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-0.5"
                    >
                      <X size={10} />
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => additionalFilesRef.current.click()}
                  className="w-20 h-20 border-2 border-dashed rounded-md flex flex-col items-center justify-center text-gray-400 hover:border-accent-dark"
                >
                  <Images size={20} />
                  <span className="text-[8px] mt-1">اضافة صور</span>
                </button>
              </div>
            </div> */}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <ButtonShadcn
              variant="outline"
              className="flex-1 cursor-pointer"
              type="button"
              onClick={() => setOpen(false)}
            >
              إلغاء
            </ButtonShadcn>
            <ButtonShadcn
              type="submit"
              disabled={isAdding || isEditing}
              className="flex-1 bg-accent-dark text-white"
            >
              {isAdding || isEditing
                ? "جاري المعالجة..."
                : productToEdit
                  ? "تحديث المنتج"
                  : "حفظ المنتج"}
            </ButtonShadcn>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
