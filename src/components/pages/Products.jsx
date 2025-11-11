import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import {getData} from "../../api/products.js";

import LogoWord from "../atoms/LogoWord.jsx";
import CategoriesList from "../molecules/CategoriesList.jsx";
import Spinner from "../atoms/Spinner.jsx";
import ProductCard from "../molecules/ProductCard.jsx";
import PaginationBar from "../molecules/PaginationBar.jsx";
import Error from "../atoms/Error.jsx";

function Products() {
    // default category (onLoad)
    const [activeCategory, setActiveCategory] = useState("الكل");

    // 🟢 جلب البيانات
    const { data: products = [], isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: getData,
        staleTime: 1000 * 60 * 2,
        refetchOnWindowFocus: true,
        retry: 2,
    });

    const categories = ["الكل", ...new Set(products.map(p => p.Category))];

    // 🟢 فلترة الداتا حسب التاب
    const filteredProducts =
        activeCategory === "الكل"
            ? products
            : products.filter((item) => item.Category === activeCategory);


    // required data for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currProducts = filteredProducts.slice(startIndex, endIndex);

    /* This block of code is for :
    * on changing category tab resets the page number to 1 again
    * mounts the code each time the active tab changed (when user clicking)
    */
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory]);

    if (isError) return <Error message={error.message}/>  // Error Component

    return (
        <>
            {/* Products Header */}
            <div className="flex max-sm:flex-col justify-between items-start sm:items-center px-2.5 my-4">
                <LogoWord className="text-4xl text-accent-dark-2">منتجاتنا</LogoWord>
                {!isLoading && <CategoriesList
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />}
            </div>

            {/* Products List */}
            {isLoading ? (
                <Spinner /> // Loader Component
            ) : (
                <div className="products-list grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {currProducts.length === 0 ? (
                        <Error />  // component for
                    ) : (
                        currProducts.map((product) => (
                            <ProductCard
                                key={`${product.id}-${product.Name}`}
                                data={product}
                            />
                        ))
                    )}
                </div>
            )}

            {/* Pagination */}
            {!isLoading && filteredProducts.length > 0 && (
                <PaginationBar
                    products={filteredProducts}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    itemsPerPage={itemsPerPage}
                />
            )}
        </>
    );
}

export default Products;
