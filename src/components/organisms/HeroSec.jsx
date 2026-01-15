import HeroImg from "../atoms/HeroImg";
import HeroTxt from "../molecules/HeroTxt";

import Lottie from "react-lottie-player";
import mouseAnim from "../../assets/scroll_down.json";

function HeroSec() {
  return (
    <section className="hero-sec h-screen py-16 flex flex-col gap-2 justify-center items-center">
      <div className=" py-2 flex flex-col sm:flex-row md:flex-row justify-center items-center gap-12 sm:gap-18 md:gap-36 sm:h-[calc(100vh-175px)] px-8 mt-14">
        <HeroTxt />
        <HeroImg />
      </div>
      <a href="#about">
        <Lottie
          loop
          animationData={mouseAnim}
          play
          style={{ width: 50, height: 50, color: "#ceb597" }}
          className={`text-accent-main`}
        />
      </a>
    </section>
  );
}

export default HeroSec;
