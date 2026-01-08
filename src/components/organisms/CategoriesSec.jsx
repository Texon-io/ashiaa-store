import SecHeading from "../atoms/SecHeading";
import CategoryCard from "../molecules/CategoryCard";

function CategoriesSec() {
  return (
    <section id="categories" className="bg-secondary-text-light w-full py-10">
      <SecHeading>تصفح حسب المنتج</SecHeading>
      <div className=" max-w-7xl mx-auto px-4 py-8">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard to="/products?category=pens" imgPath="/images/pens.jpg">
            أقلام
          </CategoryCard>
          <CategoryCard
            to="/products?category=notes"
            imgPath="/images/notebooks.jpg"
          >
            دفاتر
          </CategoryCard>
          <CategoryCard
            to="/products?category=office-organizers"
            imgPath="/images/folders.jpg"
          >
            منظمات{" "}
          </CategoryCard>
          <CategoryCard to="/products?category=mugs" imgPath="/images/mugs.jpg">
            مجات
          </CategoryCard>
          <CategoryCard to="/products?category=bags" imgPath="/images/bags.jpg">
            شنط
          </CategoryCard>
          <CategoryCard
            to="/products?category=boxes"
            imgPath="/images/boxes.jpg"
          >
            بوكسات{" "}
          </CategoryCard>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSec;
