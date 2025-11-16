import AboutSec from "../organisms/AboutSec";
import CategoriesSec from "../organisms/CategoriesSec";
import HeroSec from "../organisms/HeroSec";
import QuoteSec from "../organisms/QuoteSec";

function HomePage() {
  return (
    <div>
      <HeroSec />
      <AboutSec />
      <QuoteSec />
      <CategoriesSec />
    </div>
  );
}

export default HomePage;
