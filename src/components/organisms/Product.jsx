import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "../atoms/Button.jsx";
import { placeHolder } from "../../utils/constants.js";
import { useCart } from "../../hooks/useCart.jsx";

const optimizeImg = (url, width = 800) => {
  if (!url) return placeHolder;
  // Always use weserv for proxying/caching to save Supabase egress
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=80&output=webp`;
};

// Thumbnail: يتحمل الصورة الصغيرة بس لما يتعمله click أو hover لأول مرة
function LazyThumbnail({ imgUrl, isActive, onClick }) {
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState(null);

  // لو هي الصورة النشطة، حملها فوراً (هي الأولى الـ main image)
  useEffect(() => {
    if (isActive && !src) {
      setSrc(optimizeImg(imgUrl, 150));
      setLoaded(true);
    }
  }, [isActive, imgUrl, src]);

  const handleInteraction = () => {
    if (!src) {
      setSrc(optimizeImg(imgUrl, 150));
      setLoaded(true);
    }
    onClick();
  };

  return (
    <div
      onClick={handleInteraction}
      onMouseEnter={() => {
        // preload on hover قبل الضغط بفارق لحظة
        if (!src) setSrc(optimizeImg(imgUrl, 150));
      }}
      className={`w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer overflow-hidden border-2 transition-all shrink-0 bg-accent-main/30 ${
        isActive
          ? "border-accent-dark scale-105"
          : "border-transparent opacity-70 hover:opacity-100"
      }`}
    >
      {src ? (
        <img
          src={src}
          alt=""
          decoding="async"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = placeHolder;
          }}
        />
      ) : (
        // placeholder بسيط بدون أي طلب شبكة
        <div className="w-full h-full bg-accent-main/20 flex items-center justify-center">
          <span className="text-accent-dark/30 text-xs">•</span>
        </div>
      )}
    </div>
  );
}

function Product({ showModal, data }) {
  const { addToCart } = useCart();
  const [activeImgOriginal, setActiveImgOriginal] = useState(
    () => data?.main_image,
  );

  useEffect(() => {
    if (data?.main_image) setActiveImgOriginal(data.main_image);
  }, [data]);

  if (!data || Object.keys(data).length === 0) return null;

  const { main_image, name, description, price, stock, id, additional_images } =
    data;
  const isEmpty = stock <= 0;

  function handleCloseModal(e) {
    if (e.target === e.currentTarget) showModal(false);
  }

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

        {/* Left side */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full p-5 md:p-8 flex flex-col">
          <h5 className="text-accent-dark text-2xl md:text-4xl font-reqaa mb-4">
            {name}
          </h5>
          <p className="text-lg md:text-xl mb-6">{description}</p>
          <div className="mt-auto">
            <div className="text-accent-dark flex justify-between items-center mb-4 text-lg">
              <span className="font-semibold">{price} ج.م</span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-600 border border-red-200`}
              >
                {isEmpty ? "نفذ من المخزن" : ""}
              </span>
            </div>
            <Button
              onClick={() =>
                addToCart({ name, price, image: activeImgOriginal, id })
              }
              className="w-full disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isEmpty}
            >
              أضف إلى السلة
            </Button>
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 w-full h-1/2 md:h-full p-4 bg-accent-main/50 flex flex-col gap-4">
          {/* الصورة الكبيرة النشطة - بتتحمل بس لما يختارها */}
          <div className="flex-1 flex justify-center items-center overflow-hidden">
            <img
              key={activeImgOriginal}
              src={optimizeImg(activeImgOriginal, 800)}
              alt={name}
              decoding="async"
              className="max-h-full max-w-full rounded-xl shadow-lg object-contain transition-opacity duration-300"
              onError={(e) => {
                e.target.src = placeHolder;
              }}
            />
          </div>

          {/* الصور المصغرة - لا تتحمل إلا عند hover أو click */}
          {allImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
              {allImages.map((img, index) => (
                <LazyThumbnail
                  key={index}
                  imgUrl={img}
                  isActive={activeImgOriginal === img}
                  onClick={() => setActiveImgOriginal(img)}
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
