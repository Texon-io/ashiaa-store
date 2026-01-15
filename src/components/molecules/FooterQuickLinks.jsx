import FooterLink from "../atoms/FooterLink";

function FooterQuickLinks() {
  return (
    <div className="">
      <h4 className="font-bold mb-3 text-lg">روابط سريعة</h4>
      <ul className="space-y-2">
        <FooterLink path="/">الرئيسية</FooterLink>
        <FooterLink path="/products">المنتجات</FooterLink>
        <FooterLink path="/contact">تواصل معنا</FooterLink>
      </ul>
    </div>
  );
}

export default FooterQuickLinks;
