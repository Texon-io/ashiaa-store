import BestSellingSec from "../organisms/BestSellingSec";

import Categories from "../organisms/Categories";

import QuoteSec from "../organisms/QuoteSec";
import Hero from "../organisms/Hero.jsx";
import About from "../organisms/About.jsx";
import Testimonials from "../organisms/Testimonials.jsx";

function HomePage() {
  return (
    <div>
      <Hero />
      <Categories />
      <About />
      <BestSellingSec />
      <QuoteSec />
      <Testimonials />
    </div>
  );
}

export default HomePage;
