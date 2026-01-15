import { motion } from "framer-motion";

const About = () => {
  // Animations Setup
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
      className="relative min-h-screen bg-accent-dark-2 flex items-center overflow-hidden z-0"
      dir="rtl"
    >
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Right Side => Images */}
          <div className="lg:col-span-6 relative h-[500px] md:h-[600px]">
            {/* Big Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute inset-0 z-10 rounded-2xl overflow-hidden shadow-2xl border-12 border-card-bg"
            >
              <img
                src="/images/about-img-1.webp"
                alt="Stationery texture"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small Images*/}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 z-20 w-48 h-64 rounded-xl overflow-hidden shadow-2xl border-8 border-card-bg hidden md:block"
            >
              <img
                src="/images/about-img-2.webp"
                alt="Detail"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Background Circle */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent-dark rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          </div>

          {/* Left Side => Text */}
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
                className="text-secondary-text-light  text-sm font-bold tracking-[0.3em] uppercase"
              >
                قصة "أشياء"
              </motion.h2>

              <motion.h3
                custom={1}
                variants={textVariant}
                className="text-4xl lg:text-5xl font-bold  text-card-bg leading-relaxed"
              >
                نؤمن أن الأدوات البسيطة <br />
                <span className="text-deep-black">تصنع فارقاً كبيراً</span>
              </motion.h3>

              <motion.p
                custom={2}
                variants={textVariant}
                className="text-accent-main text-lg leading-8 max-w-xl"
              >
                بدأت "أشياء" من شغف بالورق والقلم، ومن الإيمان بأن تنظيم مساحتك
                الخاصة هو أول خطوة لتنظيم أفكارك. نحن لا نبيع مجرد دفاتر وأقلام،
                بل نقدم رفقاء لرحلتك الإبداعية، ومنظمات تحول فوضى اليوم إلى لوحة
                فنية مرتبة.
              </motion.p>

              <motion.div
                custom={3}
                variants={textVariant}
                className="grid grid-cols-2 gap-8 pt-6 border-t border-accent-main w-full"
              >
                <div>
                  <h4 className="text-2xl font-bold text-dark-metallic">
                    100%
                  </h4>
                  <p className="text-sm text-accent-main-light">
                    خامات صديقة للبيئة
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-dark-metallic">
                    صُنع بحب
                  </h4>
                  <p className="text-sm text-accent-main-light">
                    تصاميم عربية فريدة
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
