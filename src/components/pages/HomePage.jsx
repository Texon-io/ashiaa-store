import AboutSec from "../organisms/AboutSec";
import BestSellingSec from "../organisms/BestSellingSec";
import CategoriesSec from "../organisms/CategoriesSec";
import HeroSec from "../organisms/HeroSec";
import QuoteSec from "../organisms/QuoteSec";

function HomePage() {
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
