import AboutImg from "../atoms/AboutImg";
import AboutTxt from "../atoms/AboutTxt";
import Button from "../atoms/Button";
import SecHeading from "../atoms/SecHeading";
import AboutList from "../molecules/AboutList";

function AboutSec() {
  return (
    <section id="about" className="about bg-amber-300 pt-16 pb-12 px-8 h-fit">
      <SecHeading>من أنا</SecHeading>

      <div className=" py-3 content-holder flex flex-col-reverse sm:flex-row justify-center items-center gap-12 sm:gap-24 md:gap-52">
        <AboutImg />

        <div className="about-txt w-full sm:w-1/2 md:w-1/3  flex flex-col gap-12">
          <AboutTxt />
          <AboutList />
          <Button>أنضم لنا</Button>
        </div>
      </div>
    </section>
  );
}

export default AboutSec;
