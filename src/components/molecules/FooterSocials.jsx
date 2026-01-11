import SocialIcon from "../atoms/SocialIcon";

function FooterSocials() {
  return (
    <div className="socials">
      <h4 className="font-bold mb-8 text-lg mr-2">تابعنا</h4>
      <div className="flex gap-8 text-xl ">
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100064005554138"
          imgPath="/images/facebook.png"
          alt="facebook"
          customClass="justify-end"
        />
        <SocialIcon
          url="https://www.instagram.com/ba2e3t_alkotob?fbclid=IwY2xjawOBVQ1leHRuA2FlbQIxMABicmlkETFCSkNQMzA2aXU1bTluUHlmc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHg6o_e5t2GsD4PO7lsfKdj6AcSmH9J5JU8OIqg8o1ScY9mjhzKH0NYYLGmtu_aem_OzEUXr4mm6UeuEnBF6Bikg&brid=iXOlYglvWuMF0LAWXBulDQ"
          imgPath="/images/instagram.png"
          alt="instagram"
          customClass="justify-center"
        />
        <SocialIcon
          url="https://www.tiktok.com/@ba2e3t_alkotob?fbclid=IwY2xjawOBVA5leHRuA2FlbQIxMABicmlkETFCSkNQMzA2aXU1bTluUHlmc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHg9JBTkpkzx7xdHbA2IVi72A9Si4RaZ_F9AwQjFpsA_I1WshMgDd2MYOdjdw_aem_Oiq-NZm6k3MXfIsqaHKhyQ&brid=iXOlYglvWuMF0LAWXBulDQ"
          imgPath="/images/tiktok.png"
          alt="tiktok"
          customClass="justify-center"
        />
        <SocialIcon
          url="https://t.me/+UMeRax_BbF1iNTFk?fbclid=IwY2xjawOBVOVleHRuA2FlbQIxMABicmlkETFCSkNQMzA2aXU1bTluUHlmc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHv02UKtFnrih7KiubvCpV7xCakabFe5tPjUXe_OfJRV6jI3z-FMSpf4amZV0_aem_RGWEKTLdhZQC6AJ6nR0LGQ&brid=iXOlYglvWuMF0LAWXBulDQ"
          imgPath="/images/telegram.png"
          alt="telegram"
          customClass="justify-center"
        />
      </div>
    </div>
  );
}

export default FooterSocials;
