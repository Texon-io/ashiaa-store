import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PenTool, Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-main-bg px-6 overflow-hidden mt-16">
      <div className="max-w-2xl w-full text-center relative">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-10 opacity-20 hidden md:block"
        >
          <PenTool size={100} className="text-accent-dark" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[12rem] md:text-[16rem] font-bold text-accent-main/10 leading-none select-none"
        >
          404
        </motion.h1>

        {/*  main content */}
        <div className="relative -mt-20 md:-mt-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-dark-metallic mb-4"
          >
            يبدو أن هذه الصفحة قد ضلت طريقها..
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-accent-dark-2/70 text-lg mb-10 max-w-md mx-auto"
          >
            لا تقلق، حتى في "أشياء" نؤمن أن التعثر بداية لرحلة اكتشاف جديدة.
            دعنا نعود للمكان الصحيح.
          </motion.p>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-3 bg-dark-metallic text-white rounded-full font-bold shadow-lg hover:bg-accent-dark transition-all group"
            >
              <Home size={20} />
              العودة للرئيسية
            </Link>

            <Link
              to="/products"
              className="flex items-center gap-2 px-8 py-3 border-2 border-accent-main/30 text-accent-dark-2 rounded-full font-bold hover:bg-white transition-all"
            >
              تصفح منتجاتنا
              <ArrowRight size={20} className="rotate-180" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <p className="font-reqaa text-xl text-accent-main">
            أشياء تُجمّل كل التفاصيل
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
