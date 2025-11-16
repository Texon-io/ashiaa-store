import AboutImg from "../atoms/AboutImg";
import AboutTxt from "../atoms/AboutTxt";
import Button from "../atoms/Button";
import SecHeading from "../atoms/SecHeading";
import AboutList from "../molecules/AboutList";

function AboutSec() {
  return (
    <section id="about" className="about pt-12 pb-10 px-8 h-fit">
      <SecHeading>من أنا</SecHeading>

      <div className=" py-3 content-holder flex flex-col-reverse sm:flex-row justify-center items-center gap-12 sm:gap-24 md:gap-52">
        <AboutImg />

        <div className="about-txt w-full sm:w-1/2 md:w-1/3  flex flex-col gap-12 p-3">
          <AboutTxt />
          <AboutList />
          <a
            target="_blank"
            href="https://t.me/+UMeRax_BbF1iNTFk?fbclid=IwY2xjawOBVOVleHRuA2FlbQIxMABicmlkETFCSkNQMzA2aXU1bTluUHlmc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHv02UKtFnrih7KiubvCpV7xCakabFe5tPjUXe_OfJRV6jI3z-FMSpf4amZV0_aem_RGWEKTLdhZQC6AJ6nR0LGQ&brid=iXOlYglvWuMF0LAWXBulDQ"
          >
            <Button>أنضم لنا</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSec;
