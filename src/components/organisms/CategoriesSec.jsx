import SecHeading from "../atoms/SecHeading";
import CategoryCard from "../molecules/CategoryCard";

function CategoriesSec() {
  return (
    <section id="categories" className="bg-secondary-text-light w-full py-10">
      <SecHeading>تصفح حسب المنتج</SecHeading>
      <div className=" max-w-7xl mx-auto px-4 py-8">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard to="/products" imgPath="/images/books.jpg">
            كتب
          </CategoryCard>
          <CategoryCard to="/products" imgPath="/images/notebooks.jpg">
            دفاتر
          </CategoryCard>
          <CategoryCard to="/products" imgPath="/images/tools.jpg">
            أدوات مكتبية{" "}
          </CategoryCard>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSec;
