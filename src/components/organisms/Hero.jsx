import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Lottie from "react-lottie-player";
import mouseAnim from "../../assets/scroll_down.json";
import { Link } from "react-router";

const Hero = () => {
  const { scrollY } = useScroll();
  const rawY1 = useTransform(scrollY, [0, 500], [0, 80]);
  const rawY2 = useTransform(scrollY, [0, 500], [0, -60]);
  const rawY3 = useTransform(scrollY, [0, 500], [0, -40]);

  const ySmooth1 = useSpring(rawY1, { stiffness: 100, damping: 30 });
  const ySmooth2 = useSpring(rawY2, { stiffness: 100, damping: 30 });
  const ySmooth3 = useSpring(rawY3, { stiffness: 100, damping: 30 });

  return (
    <section
      dir="rtl"
      className="relative min-h-screen w-full bg-main-bg overflow-hidden flex items-center py-10 lg:py-0 text-right z-0"
    >
      {/* Background Glow */}
      <motion.div
        style={{ y: ySmooth1 }}
        className="absolute top-20 right-10 w-40 h-40 lg:w-64 lg:h-64 bg-accent-dark  rounded-full blur-[80px] lg:blur-[100px] opacity-60"
      />
      {/* Background Glow */}
      <motion.div
        style={{ y: ySmooth1 }}
        className="absolute bottom-20 left-10 w-40 h-40 lg:w-64 lg:h-64 bg-accent-dark  rounded-full blur-[80px] lg:blur-[100px] opacity-60"
      />

      <div className="container mx-auto px-6 mt-16 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 flex flex-col items-center lg:items-start text-center lg:text-right "
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#8D6E63] font-medium tracking-widest mb-6 block text-xs lg:text-sm uppercase"
          >
            مجموعة أشياء الحصرية ٢٠٢٦
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-dark-metallic leading-[1.2] mb-6">
            أشياء تُجمّل <br />
            <span className="text-[#8D6E63] font-light italic underline decoration-1 underline-offset-8">
              تفاصيل يومك
            </span>
          </h1>

          <p className="text-base lg:text-lg text-[#6D4C41]/80 max-w-md mb-8 lg:mb-10 leading-7">
            مجموعتنا المختارة من الأدوات المكتبية والمنظمات مصممة لتضيف لمسة من
            الأناقة والإنتاجية لمساحتك الخاصة.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 w-full sm:w-auto">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#5D4037" }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer w-full bg-dark-metallic sm:w-fit text-white px-8 lg:px-10 py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl transition-colors"
              >
                <ShoppingBag size={18} />
                <span className="font-semibold text-sm lg:text-base">
                  تسوق الآن
                </span>
              </motion.button>
            </Link>

            <a href="#categories">
              <motion.button
                whileHover={{ x: 5 }}
                className="group cursor-pointer w-full sm:w-fit text-main-text font-bold px-4 py-4 flex items-center justify-center gap-2 transition-all"
              >
                <span className="text-sm lg:text-base">أكتشف المزيد</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </a>
          </div>
        </motion.div>
        <div className="order-2 relative h-[400px] lg:h-[600px] w-full flex justify-center items-center mt-10 lg:mt-0">
          {/* Main Notebook */}
          <motion.div
            style={{ y: ySmooth2 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-48 h-64 lg:w-72 lg:h-96 bg-card-bg rounded-2xl shadow-2xl overflow-hidden p-2 lg:p-3 border-2 border-accent-dark"
          >
            <img
              src="/images/hero-notes.webp"
              alt="Notebook"
              className="w-full h-full object-cover rounded-xl shadow-inner"
            />
          </motion.div>

          {/* Pen - Accessory 1 */}
          <motion.div
            style={{ y: ySmooth1 }}
            animate={{ y: [0, 15, 0], rotate: [5, 12, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 left-[10%] lg:left-[15%] z-30 w-16 h-24 lg:w-24 lg:h-32 bg-card-bg  backdrop-blur-md p-2 rounded-xl lg:rounded-2xl shadow-lg border-2 border-accent-dark"
          >
            <img
              src="/images/hero-pens.webp"
              alt="pen"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* New Accessory 2 (Bottom Right now) */}
          <motion.div
            style={{ y: ySmooth3 }}
            animate={{ y: [0, 20, 0], rotate: [7, 15, 7] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-[5%] right-[5%] lg:bottom-[10%] lg:right-[10%] z-30 w-20 h-20 lg:w-28 lg:h-28 bg-card-bg p-1.5 lg:p-2 rounded-full shadow-2xl border-2 border-accent-dark"
          >
            <img
              src="/images/hero-tools.webp"
              alt="accessory"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Lottie Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 no-underline group"
        >
          <Lottie
            loop
            animationData={mouseAnim}
            play
            style={{ width: 60, height: 60 }}
          />
          <span className="text-[10px] text-[#8D6E63] font-bold tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">
            اكتشف المزيد
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
