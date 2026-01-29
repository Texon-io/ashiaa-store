import { motion } from "framer-motion";
import { useState } from "react"; // استيراد useState لتغيير الصورة
import Button from "../atoms/Button.jsx";
import { placeHolder } from "../../utils/constants.js";
import { useCart } from "../../hooks/useCart.jsx";

function Product({ showModal, data }) {
  const { main_image, name, description, price, stock, id, additional_images } = data;
  const { addToCart } = useCart();
  const tempImg = placeHolder;

  // State للتحكم في الصورة المعروضة حالياً
  const [activeImg, setActiveImg] = useState(main_image || tempImg);

  function handleCloseModal(e) {
    if (e.target === e.currentTarget) showModal(false);
  }

  // تجميع كل الصور في مصفوفة واحدة للعرض
  const allImages = [main_image, ...(additional_images || [])].filter(Boolean);

  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 bg-black/30 flex justify-center items-center z-[100]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="bg-white rounded-2xl shadow-xl relative flex flex-col-reverse md:flex-row w-[95%] md:w-3/4 h-[90%] md:h-3/4 overflow-hidden"
      >
        <span
          onClick={() => showModal(false)}
          className="absolute left-5 top-2 text-3xl z-10 opacity-80 hover:opacity-100 cursor-pointer"
        >
          &times;
        </span>

        {/* Left side (text) */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full p-5 md:p-8 flex flex-col">
          <h5 className="text-accent-dark text-2xl md:text-4xl font-reqaa mb-4">{name}</h5>
          <p className="text-lg md:text-xl mb-6">{description}</p>

          <div className="mt-auto">
            <div className="text-accent-dark flex justify-between items-center mb-4 text-lg">
              <span className="font-semibold">{price} ج.م</span>
              <span>الكمية: {stock}</span>
            </div>
            <Button onClick={() => addToCart({ name, price, image: activeImg, id })} className="w-full">
              أضف إلى السلة
            </Button>
          </div>
        </div>

        {/* Right side (images) */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full p-4 bg-accent-main/50 flex flex-col gap-4">
          {/* Main Image View */}
          <div className="flex-1 flex justify-center items-center overflow-hidden">
            <img
              src={activeImg}
              alt={name}
              className="max-h-full max-w-full rounded-xl shadow-lg object-contain"
            />
          </div>

          {/* Thumbnails Row */}
          {allImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
              {allImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImg(img)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer object-cover border-2 transition-all ${activeImg === img ? "border-accent-dark scale-105" : "border-transparent opacity-70"
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Product;