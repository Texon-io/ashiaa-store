import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import LogoWord from "../atoms/LogoWord.jsx";
import CategoriesList from "../molecules/CategoriesList.jsx";
import Spinner from "../atoms/Spinner.jsx";
import ProductCard from "../molecules/ProductCard.jsx";
import Button from "../atoms/Button.jsx";
import PaginationBar from "../molecules/PaginationBar.jsx";

function Products() {
  const categories = ["الكل", "كتب", "أدوات مكتبية", "نوت بوك"];
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: true,
    retry: 2,
  });

  if (isError) return <span>Error: {error.message}</span>;

  async function getData() {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycby7n6c77trTyqZ9UDymWNAjhmPh8bzU3KTViNiigWo2wGxLf6HQAJ-RcY3hG2eLdKHplg/exec",
    );
    if (!res.ok) throw new Error("Failed to fetch data");

    return res?.json();
  }
  return (
    <>
      {/* Products page header*/}
      <div className={`flex justify-between items-center px-2.5 my-4`}>
        <LogoWord className={`text-4xl text-accent-dark-2`}>منتجاتنا</LogoWord>
        <CategoriesList
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      {/*  Products Cards*/}

      {/*  Spinner  */}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={`products-list grid justify-center grid-cols-4 gap-5`}>
          {activeCategory ==="الكل" ? products.slice(startIndex, endIndex).map((product) => (
              <ProductCard key={product.id} data={product} />
          )) :
              products.filter(item => item.Category === activeCategory ).slice(startIndex, endIndex).map((product) => (
                  <ProductCard data={product} />
              ))
          }
        </div>
      )}

      {/* Pagination Bar */}
      {!isLoading && (
        <PaginationBar
          products={products}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          items
          itemsPerPage={itemsPerPage}
        />
      )}
    </>
  );
}

export default Products;
