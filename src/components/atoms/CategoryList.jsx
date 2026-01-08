function CategoryList({ category, activeCategory, setActiveCategory }) {
  return (
    <li
      onClick={() => setActiveCategory(category)}
      className={`p-2 sm:px-3 rounded-lg cursor-pointer font-medium ${
        activeCategory === category
          ? "bg-accent-dark/90 text-white"
          : "bg-accent-main/20 hover:bg-accent-main/40"
      } transition-all duration-150 flex justify-center items-center`}
    >
      {category}
    </li>
  );
}

export default CategoryList;
