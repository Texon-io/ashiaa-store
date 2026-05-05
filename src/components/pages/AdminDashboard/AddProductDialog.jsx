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
import { toast } from "sonner";
import { color } from "framer-motion";

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
  const [productColors, setProductColors] = useState([]);
  const mainFileRef = useRef(null);
  const additionalFilesRef = useRef(null);
  const { addProduct, editProduct, isAdding, isEditing } = useAllProducts();

  const colorInputRef = useRef(null);



  useEffect(() => {
    if (productToEdit) {
      setSelectedCategory(productToEdit.category);
      setMainImage(productToEdit.main_image || null);
      setAdditionalImages(productToEdit.additional_images || []);
      setIsBestSeller(productToEdit.best_seller);
      setProductColors(productToEdit.colors || []);
    } else {
      setSelectedCategory("دفاتر");
      setMainImage(null);
      setAdditionalImages([]);
      setProductColors([]);
    }
  }, [productToEdit, open]);

  // Handle main image change
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setMainImage(file);
  };

  const removeMainImage = () => {
    setMainImage(null);
    if (mainFileRef.current) mainFileRef.current.value = "";
  };

  const removeAdditionalImage = (index) => {
    setAdditionalImages((prev) => prev.filter((_, i) => i !== index));
  };

  const addColor = () => {
    const selectedColor = colorInputRef?.current?.value;
    if (!productColors.includes(selectedColor)) {
      setProductColors([...productColors, selectedColor]);
    }
  };

  const removeColor = (colorToRemove) => {
    setProductColors(productColors.filter((c) => c !== colorToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (additionalImages.length > 5) {
      toast.info(
        "عفواً، الحد الأقصى للصور الإضافية هو 5 صور فقط لضمان سرعة الموقع.",
      );
      return;
    }

    const productData = {
      name: e.target.name.value,
      description: e.target.desc.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      category: selectedCategory,
      main_image: mainImage,
      additional_images: additionalImages,
      best_seller: isBestSeller,
      colors: productColors,
    };

    if (productToEdit) {
      editProduct({ id: productToEdit.id, updatedData: productData });
    } else {
      addProduct(productData);
    }

    setOpen(false);
  };

  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (additionalImages.length + files.length > 5) {
      alert("لا يمكن إضافة أكثر من 5 صور إضافية.");
      return;
    }
    setAdditionalImages((prev) => [...prev, ...files]);
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

          {/* Colors Section */}
          <div className="space-y-3 text-left">
            <Label>ألوان المنتج</Label>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border rounded-lg p-1 px-2 bg-gray-50">
                <input
                  type="color"
                  ref={colorInputRef}
                  defaultValue={"#000000"}
                  className="w-8 h-8 rounded-full border-none cursor-pointer bg-transparent overflow-hidden"
                />
                <span className="text-xs font-mono uppercase">
                  {colorInputRef.current?.value || "#000000"}
                </span>
              </div>
              <ButtonShadcn
                type="button"
                onClick={addColor}
                variant="outline"
                className="h-10 px-4 text-sm cursor-pointer"
              >
                إضافة لون
              </ButtonShadcn>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {productColors.map((color, index) => (
                <div
                  key={index}
                  className="group relative flex items-center gap-2 px-2 py-1 rounded-full border bg-white hover:border-red-200 transition-all"
                >
                  <div
                    className="w-4 h-4 rounded-full border shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-[10px] font-mono uppercase">
                    {color}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeColor(color)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
              {productColors.length === 0 && (
                <p className="text-xs text-gray-400 italic">
                  لا توجد ألوان مضافة بعد
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-44">
            {" "}
            {/* Main Image Section */}
            <div className="space-y-3 text-left h-full">
              <Label>الصورة الرئيسية</Label>
              <div className="flex flex-wrap gap-2 h-full">
                <input
                  type="file"
                  hidden
                  ref={mainFileRef}
                  onChange={handleMainImageChange}
                  accept="image/*"
                />
                {mainImage ? (
                  <div className="relative w-40 h-36 rounded-lg overflow-hidden border">
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
                      className="absolute top-1 right-1 bg-red-500 cursor-pointer text-white rounded-full p-1"
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
            <div className="space-y-3 text-left h-full">
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
                      className="absolute top-0 right-0 bg-red-500 cursor-pointer text-white rounded-full p-0.5"
                    >
                      <X size={10} />
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => additionalFilesRef.current.click()}
                  className="w-20 h-20 border-2 border-dashed rounded-md flex flex-col items-center justify-center text-gray-400 hover:border-accent-dark hover:text-accent-dark cursor-pointer duration-300"
                >
                  <Images size={20} />
                  <span className="text-[8px] mt-1">اضافة صور</span>
                </button>
              </div>
            </div>
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
