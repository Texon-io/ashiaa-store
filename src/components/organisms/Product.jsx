import { motion } from "framer-motion";

import Button from "../atoms/Button.jsx";

function Product({ showModal, data }) {
  const { ImageURL, Name, Description, Price, Stock } = data;

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
        className={`w-3/4 h-3/4 bg-white rounded-2xl shadow-xl relative flex justify-start items-center`}
      >
        <span
          onClick={() => showModal(false)}
          className={`absolute left-5 top-2 text-3xl opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer`}
        >
          &times;
        </span>
        <div className={`w-1/2 h-full rounded-2xl p-8 `}>
          <div
            className={`flex flex-col justify-start items-start gap-10 pt-10 h-full`}
          >
            <h5 className={`text-accent-dark text-4xl font-reqaa`}>{Name}</h5>
            <p className={`text-xl tracking-wide leading-8`}>{Description}</p>
            <div
              className={`text-accent-dark flex justify-between items-center mt-auto w-full`}
            >
              <span className={`text-2xl font-semibold`}>{Price} ج.م</span>
              <span>الكمية: {Stock}</span>
            </div>
            <Button className={`w-full `}>أضف إلى السلة</Button>
          </div>
        </div>
        <div className={`w-1/2 rounded-l-2xl p-8 bg-accent-main/50 h-full`}>
          <div
            className={`w-full h-full flex justify-center items-center object-contain`}
          >
            <img
              src={`${ImageURL}`}
              alt={Name}
              className={`w-5/6 h-5/6 rounded-xl shadow-lg`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Product;
