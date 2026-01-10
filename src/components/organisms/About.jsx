import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // إعدادات الأنيميشن للنص
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#F9F7F5] py-24 overflow-hidden"
      dir="rtl"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* الجانب الأيمن: معرض الصور المتحرك */}
          <div className="lg:col-span-6 relative h-[500px] md:h-[600px]">
            {/* الصورة الكبيرة - تمثل الهدوء */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute inset-0 z-10 rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1000&auto=format&fit=crop"
                alt="Stationery texture"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* صورة صغيرة متداخلة - تمثل التفاصيل */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 z-20 w-48 h-64 rounded-xl overflow-hidden shadow-2xl border-8 border-white hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1516962080544-eac695c93791?q=80&w=600&auto=format&fit=crop"
                alt="Detail"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* عنصر زخرفي خلف الصور */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#E2D5C8] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          </div>

          {/* الجانب الأيسر: المحتوى النصي */}
          <div className="lg:col-span-6 flex flex-col items-start text-right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2
                custom={0}
                variants={textVariant}
                className="text-[#8D6E63] text-sm font-bold tracking-[0.3em] uppercase"
              >
                قصة "أشياء"
              </motion.h2>

              <motion.h3
                custom={1}
                variants={textVariant}
                className="text-4xl lg:text-5xl font-bold text-[#3E2723] leading-tight"
              >
                نؤمن أن الأدوات البسيطة <br />
                <span className="text-[#ceb597] font-serif italic">
                  تصنع فارقاً كبيراً
                </span>
              </motion.h3>

              <motion.p
                custom={2}
                variants={textVariant}
                className="text-[#6D4C41] text-lg leading-relaxed max-w-xl"
              >
                بدأت "أشياء" من شغف بالورق والقلم، ومن الإيمان بأن تنظيم مساحتك
                الخاصة هو أول خطوة لتنظيم أفكارك. نحن لا نبيع مجرد دفاتر وأقلام،
                بل نقدم رفقاء لرحلتك الإبداعية، ومنظمات تحول فوضى اليوم إلى لوحة
                فنية مرتبة.
              </motion.p>

              <motion.div
                custom={3}
                variants={textVariant}
                className="grid grid-cols-2 gap-8 pt-6 border-t border-[#8D6E63]/20 w-full"
              >
                <div>
                  <h4 className="text-2xl font-bold text-[#3E2723]">100%</h4>
                  <p className="text-sm text-[#8D6E63]">خامات صديقة للبيئة</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#3E2723]">
                    صُنع بحب
                  </h4>
                  <p className="text-sm text-[#8D6E63]">تصاميم عربية فريدة</p>
                </div>
              </motion.div>

              <motion.button
                custom={4}
                variants={textVariant}
                whileHover={{ gap: "20px" }}
                className="flex items-center gap-4 text-[#3E2723] font-bold group transition-all"
              >
                <div className="w-12 h-[1px] bg-[#3E2723] group-hover:w-20 transition-all"></div>
                تعرف على فريقنا
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
