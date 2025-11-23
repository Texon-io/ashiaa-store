import AboutSec from "../organisms/AboutSec";
import BestSellingSec from "../organisms/BestSellingSec";
import CategoriesSec from "../organisms/CategoriesSec";
import HeroSec from "../organisms/HeroSec";
import QuoteSec from "../organisms/QuoteSec";
import useProducts from "../../hooks/useProducts.js";

function HomePage() {
  // variable to store bestseller products
  let bestSeller;

  // Fetching bestseller by the same API
  const { data: products, isSuccess, error } = useProducts();

  // on success assigning first 3 bestsellers products in variable
  if (isSuccess) {
    bestSeller = products.filter((p) => p.BestSeller).slice(0, 3) || [];
  }

  // on error console this error
  // you handle error and the rest of code
  if (error) console.error(error);

  return (
    <div>
      <HeroSec />
      <AboutSec />
      <BestSellingSec />
      <QuoteSec />
      <CategoriesSec />
    </div>
  );
}

export default HomePage;
