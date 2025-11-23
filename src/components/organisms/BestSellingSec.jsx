import useProducts from "../../hooks/useProducts.js";
import SecHeading from "../atoms/SecHeading.jsx";
import BestSellingProduct from "../molecules/BestSellingProduct.jsx";

function BestSellingSec() {
  // variable to store bestseller products
  let bestSeller;

  // Fetching bestseller by the same API
  const { data: products, isSuccess, error } = useProducts();

  // on success assigning first 3 bestsellers products in variable
  if (isSuccess) {
    bestSeller = products.filter((p) => p.BestSeller).slice(0, 4) || [];
  }

  // on error console this error
  // you handle error and the rest of code
  if (error) console.error(error);
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      {/* Sec Title */}
      <SecHeading>الأكثر مبيعاً</SecHeading>

      {/* Products Grid */}
      <div
        className="
         
          pt-6
          px-4
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-6
    "
      >
        {bestSeller &&
          bestSeller.map((product) => (
            <BestSellingProduct
              key={product.id}
              id={product.id}
              name={product.Name}
              price={product.Price}
              image={product.ImageURL}
              description={product.Description}
            />
          ))}
      </div>
    </section>
  );
}

export default BestSellingSec;
