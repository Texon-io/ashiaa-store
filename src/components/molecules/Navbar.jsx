import { NavLink } from "react-router";
import ShobbingBag from "../atoms/ShobbingBag.jsx";
import Button from "../atoms/Button.jsx";

function Navbar() {
  return (
    <nav
      className={`px-8 py-3 flex justify-between text-accent-dark`}
    >
      <div className={`nav-logo font-reqaa text-2xl `}>
        متجر بائعة الكتب
      </div>
      <ul className={`nav-links flex justify-evenly gap-10  text-shadow-2xs`}>
        <NavLink to={"/"}  className={({ isActive }) =>
            isActive ? "font-semibold" : ""
        }>
          <li className={`hover:text-accent-dark/70 transition-all duration-300`}>الرئيسية</li>
        </NavLink>
        <NavLink to={"/products"}  className={({ isActive }) =>
            isActive ? "font-semibold" : ""
        }>
          <li className={`hover:text-accent-dark/70 transition-all duration-300`}>المنتجات</li>
        </NavLink>
        <NavLink to={"/contact"}  className={({ isActive }) =>
            isActive ? "font-semibold" : ""
        }>
          <li className={`hover:text-accent-dark/70 transition-all duration-300 `}>تواصل معنا</li>
        </NavLink>
      </ul>
      <div className={`nav-cart-icon bg-secondary/30 p-1.5 rounded-lg `}>
          <Button>
              <ShobbingBag width={32} height={32} strokeWidth={3} stroke={"#5e3b37"}/>
          </Button>
      </div>
    </nav>
  );
}

export default Navbar;
