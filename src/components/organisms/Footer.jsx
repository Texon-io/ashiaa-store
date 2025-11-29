import FooterLogo from "../molecules/FooterLogo";
import SecDivider from "../atoms/SecDivider";
import FooterQuickLinks from "../molecules/FooterQuickLinks";
import FooterSocials from "../molecules/FooterSocials";

function Footer() {
  return (
    <footer className=" py-4">
      <div className=" relative max-w-6xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 sm:gap-32 md:gap-20 text-sm">
        <SecDivider pos="top-0" />
        <FooterLogo />

        <FooterQuickLinks />

        <FooterSocials />
        <SecDivider pos="bottom-0" />
      </div>
      <div className="text-center my-4 pt-4 text-sm text-[#70453F]/70">
        <p>
            <span>© 2025 بائعة الكتب. كل الحقوق محفوظة. </span> —
            <a href={`https://texon-dev.netlify.app/`}> Made by <span className={`text-[#70453F] font-semibold underline underline-offset-2`}>Texon</span> Team</a>

        </p>

      </div>

    </footer>
  );
}

export default Footer;
