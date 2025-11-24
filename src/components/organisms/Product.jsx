import { motion } from "framer-motion";

import Button from "../atoms/Button.jsx";
import { placeHolder } from "../../utils/constants.js";
import { useCart } from "../../hooks/useCart.jsx";

function Product({ showModal, data }) {
  const {
    ImageURL: image,
    Name: name,
    Description: desc,
    Price: price,
    Stock: stock,
    id,
  } = data;
  const { addToCart } = useCart();
  const tempImg = placeHolder;

  function handleCloseModal(e) {
    if (e.target === e.currentTarget) showModal(false);
  }

  return (
    <div
      onClick={handleCloseModal}
      className={`fixed inset-0 bg-black/30 flex justify-center items-center z-[100]`}
    >
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="modal"
            className={`
    bg-white rounded-2xl shadow-xl relative flex
    flex-col-reverse md:flex-row
    w-[95%] md:w-3/4
    h-[90%] md:h-3/4
  `}
        >
  <span
      onClick={() => showModal(false)}
      className="absolute left-2 md:left-5 -top-1 md:top-2 text-3xl opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
  >
    &times;
  </span>

            {/* Left side (text) */}
            <div className="md:w-1/2 w-full h-1/2 md:h-full p-5 md:p-8">
                <div className="flex flex-col gap-6 md:gap-10 pt-5 md:pt-10 h-full">
                    <h5 className="text-accent-dark text-2xl md:text-4xl font-reqaa">{name}</h5>
                    <p className="text-lg md:text-xl tracking-wide leading-7 md:leading-8">{desc}</p>

                    <div className="text-accent-dark flex justify-between items-center mt-auto w-full text-lg md:text-xl">
                        <span className="font-semibold">{price} ج.م</span>
                        <span>الكمية: {stock}</span>
                    </div>

                    <Button
                        onClick={() => addToCart({ name, price, image, id })}
                        className="w-full"
                    >
                        أضف إلى السلة
                    </Button>
                </div>
            </div>

            {/* Right side (image) */}
            <div
                className="md:w-1/2 w-full h-1/2 md:h-full rounded-b-2xl md:rounded-l-2xl p-5 md:p-8 bg-accent-main/50 flex justify-center items-center"
            >
                <div className="w-full h-full md:w-5/6 md:h-5/6 flex justify-center items-center">
                    <img
                        src={image || tempImg}
                        alt={name}
                        className="w-full h-full rounded-xl shadow-lg object-cover"
                    />
                </div>
            </div>
        </motion.div>

    </div>
  );
}

export default Product;
