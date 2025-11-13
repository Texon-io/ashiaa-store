import Button from "../atoms/Button";

function HeroTxt() {
  return (
    <div className="text-holder ">
      <h3 className="text-4xl font-bold mb-8 text-secondary-text-light">
        بين دفء الصفحات ورائحة الورق... <br />
        تبدأ الحكاية.
      </h3>
      <p className="text-xl text-secondary-text-light mb-8">
        اكتشف كتبًا تُلامس روحك، وأدوات مكتبية تُلهم تفاصيل يومك.
      </p>
      <Button type="link" to="/products" variant="secondary">
        تسوق الأن
      </Button>
    </div>
  );
}

export default HeroTxt;
