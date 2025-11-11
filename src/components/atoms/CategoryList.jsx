function CategoryList({category, activeCategory,setActiveCategory}) {
    return (
        <li onClick={()=> setActiveCategory(category)} className={` p-2 px-3 rounded-lg cursor-pointer font-medium ${activeCategory === category  ? "bg-accent-dark/90 text-white" : "bg-accent-main/20"} transition-all duration-150`}>{category}</li>
    )
}

export default CategoryList;
