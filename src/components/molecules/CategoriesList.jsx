import CategoryList from "../atoms/CategoryList.jsx";

function CategoriesList({ categories, activeCategory, setActiveCategory }) {
  return (
    <ul
      className={`my-4 mt-8 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 md:gap-5`}
    >
      {categories.map((category) => (
        <CategoryList
          key={category}
          category={category}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      ))}
    </ul>
  );
}

export default CategoriesList;
