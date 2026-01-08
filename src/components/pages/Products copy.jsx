import { useState, useEffect } from "react";
import {useSearchParams} from "react-router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import LogoWord from "../atoms/LogoWord.jsx";
import CategoriesList from "../molecules/CategoriesList.jsx";
import ProductCard from "../molecules/ProductCard.jsx";
import PaginationBar from "../molecules/PaginationBar.jsx";
import Error from "../atoms/Error.jsx";
import Product from "../organisms/Product.jsx";
import { AnimatePresence } from "framer-motion";
import useProducts from "../../hooks/useProducts.js";

function Products() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [dataToShow, setDataToShow] = useState({});


    // default category (onLoad)
  const [activeCategory, setActiveCategory] = useState("الكل");

    // searching for category in URL params
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const categoryFromURL = searchParams.get("category");
        if (categoryFromURL) {
            switch (categoryFromURL){
                case "books":
                    setActiveCategory("كتب");
                    break;
                case "notes":
                    setActiveCategory("نوت بوك");
                    break;
                case "stationary":
                    setActiveCategory("أدوات مكتبية");
                    break;
                default:
                    setActiveCategory("الكل");
            }
        }
    }, [searchParams]);


  // managing data by react query
  const { data: products = [], isLoading, isError, error } = useProducts();

  const categories = ["الكل", ...new Set(products.map((p) => p.Category))]; // Applying categories dynamically from Google Sheets

  // Filtering data items based on their category
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

  /* on changing category tab resets the page number to 1 */
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  if (isError) return <Error message={error.message} />;

  return (
    <>
      <AnimatePresence>
        {showProductModal && (
          <Product showModal={setShowProductModal} data={dataToShow} />
        )}
      </AnimatePresence>

      <div className="p-6 px-8 mt-14">
        {/* Products Header */}
        <div className="flex max-sm:flex-col justify-between items-start sm:items-center px-2.5 my-4">
          <LogoWord className="text-4xl text-accent-dark-2">منتجاتنا</LogoWord>
          {!isLoading && (
            <CategoriesList
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          )}
        </div>

        {/* Products List */}
        <div className="products-list grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {isLoading
            ? Array.from({ length: itemsPerPage }).map((_, index) => (
                <div key={index} className="w-full p-2 rounded-2xl">
                  <Skeleton height={200} className={`rounded-xl`} />{" "}
                  {/* Image */}
                  <Skeleton
                    count={2}
                    height={20}
                    style={{ marginTop: "0.5rem" }}
                  />{" "}
                  {/* Text */}
                </div>
              ))
            : currProducts.map((product) => (
                <ProductCard
                  showModal={setShowProductModal}
                  setData={setDataToShow}
                  key={`${product.id}-${product.Name}`}
                  data={product}
                />
              ))}
        </div>

        {/* Pagination */}
        {!isLoading && filteredProducts.length > 0 && (
          <PaginationBar
            products={filteredProducts}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
          />
        )}
      </div>
    </>
  );
}

export default Products;
