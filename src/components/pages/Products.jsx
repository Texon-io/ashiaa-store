import Logo from "../atoms/Logo.jsx";
import {useState} from "react";
import CategoriesList from "../molecules/CategoriesList.jsx";

function Products() {
    const categories = ['الكل', "الكتب", "الدفاتر", "أدوات مكتبية"];

    const [activeCategory, setActiveCategory] = useState("الكل")
  return <>
    <div className={`flex justify-between items-center px-2.5`}>
        <Logo className={`text-4xl text-accent-dark-2`}>منتجاتنا</Logo>
        <CategoriesList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
    </div>
  </>;
}

export default Products;
