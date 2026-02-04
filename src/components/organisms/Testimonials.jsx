import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  { id: 1, img: "/images/review-1.jfif", rotate: "-3deg" },
  { id: 2, img: "/images/review-2.jfif", rotate: "2deg" },
  { id: 3, img: "/images/review-3.jfif", rotate: "-2deg" },
  { id: 4, img: "/images/review-4.jfif", rotate: "4deg" },
  { id: 5, img: "/images/review-5.png", rotate: "-1deg" },
  { id: 6, img: "/images/review-6.jfif", rotate: "3deg" },
];

const InstagramReviews = () => {
  const [showAll, setShowAll] = useState(false);

  // The numbers of items to display
  const initialItems = 6;
  const displayedReviews = showAll ? reviews : reviews.slice(0, initialItems);

  return (
    <section className="py-24 bg-[#F4F1EE] overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary text-sm font-bold tracking-[0.3em] mb-4"
          >
            مجتمع أشياء
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-dark-metallic"
          >
            من آراء عملائنا ✨
          </motion.h3>
          <p className="mt-4 text-accent-main">
            نعتز بكل لحظة إبداع تشاركونا إياها
          </p>
        </div>

        <motion.div
          layout
          className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence>
            {displayedReviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout // To trigger layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                whileHover={{
                  rotate: "0deg",
                  scale: 1.1,
                  zIndex: 50,
                  transition: { type: "spring", stiffness: 300 },
                }}
                style={{ rotate: rev.rotate }}
                className="relative cursor-pointer group"
              >
                <div className="bg-white p-2 pb-8 shadow-lg rounded-sm border border-gray-100 transition-shadow group-hover:shadow-2xl">
                  <div className="aspect-9/16 overflow-hidden bg-gray-100">
                    <img
                      src={rev.img}
                      alt="Customer Review"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-40 group-hover:opacity-100 transition-opacity">
                    <span
                      className="text-[10px] font-bold text-main-text"
                      dir="ltr"
                    >
                      @ashiaa__store
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          {reviews.length > initialItems && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="cursor-pointer px-8 py-3 border-2 border-dark-metallic text-dark-metallic rounded-full font-bold hover:bg-dark-metallic hover:text-white transition-all duration-300"
            >
              {showAll ? "عرض أقل" : "رؤية المزيد من الآراء"}
            </button>
          )}

          <motion.a
            href="https://www.instagram.com/ashiaa__store/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(141,110,99,0)",
                "0px 0px 20px rgba(141,110,99,0.4)",
                "0px 0px 0px rgba(141,110,99,0)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: "reverse",
            }}
            className="px-8 py-3 bg-dark-metallic hover:bg-accent-dark-2 text-white rounded-full font-bold shadow-lg flex items-center gap-2"
          >
            <span>شاركنا قصتك على انستجرام</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              {/* Instagram Icon */}
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default InstagramReviews;
