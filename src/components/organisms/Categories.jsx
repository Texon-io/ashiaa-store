import { motion } from "framer-motion";

import SecHeading from "../atoms/SecHeading";
import CategoryCard from "../molecules/CategoryCard";

const categories = [
  {
    id: 1,
    title: "دفاتر",
    path: "/products?category=notes",
    img: "/images/notebooks.webp",
    size: "lg",
  },
  {
    id: 2,
    title: "أقلام",
    path: "/products?category=pens",
    img: "/images/pens.webp",
    size: "md",
  },
  {
    id: 3,
    title: "منظمات",
    path: "/products?category=office-organizers",
    img: "/images/folders.webp",
    size: "md",
  },
  {
    id: 4,
    title: "بوكسات",
    path: "/products?category=boxes",
    img: "/images/boxes.webp",
    size: "md",
  },
  {
    id: 5,
    title: "مجات",
    path: "/products?category=mugs",
    img: "/images/mugs.webp",
    size: "lg",
  },
  {
    id: 6,
    title: "شنط",
    path: "/products?category=bags",
    img: "/images/bags.webp",
    size: "md",
  },
];

function CategoriesSec() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="categories"
      className="bg-accent-main-light w-full py-20 px-4"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SecHeading>تصفح حسب القسم</SecHeading>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 h-auto md:h-[700px]"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer shadow-sm hover:shadow-2xl will-change-transform
    ${
      cat.size === "lg"
        ? "md:col-span-2 md:row-span-1"
        : "md:col-span-1 md:row-span-1"
    }
    ${index === 4 ? "md:col-start-2 md:col-span-2" : ""} 
  `}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <CategoryCard
                to={cat.path}
                imgPath={cat.img}
                className="w-full h-full transform-gpu" // GPU acceleration
              >
                <div className="absolute inset-0 bg-linear-to-t from-dark-metallic/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute bottom-6 right-6 text-main-bg z-20">
                  <h3 className="text-3xl font-bold mb-1">{cat.title}</h3>

                  <div className="w-0 group-hover:w-full h-0.5 bg-white transition-[width] duration-500 ease-in-out origin-right" />
                </div>
              </CategoryCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CategoriesSec;
