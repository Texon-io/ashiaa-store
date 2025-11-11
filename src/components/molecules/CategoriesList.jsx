import CategoryList from "../atoms/CategoryList.jsx";

function CategoriesList({categories, activeCategory, setActiveCategory}) {
    return (
        <ul className={`my-4 mt-8 flex gap-5`}>
            {categories.map(category => (
                <CategoryList category={category} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
            ))}
        </ul>
    )
}

export default CategoriesList;
