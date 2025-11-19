import { useState } from "react";
import NavIcon from "../atoms/NavIcon.jsx";
import NavTabs from "../molecules/NavTabs.jsx";
import { menuIcon, shoppingIcon } from "../../utils/constants.js";
import LogoWord from "../atoms/LogoWord.jsx";
import SecDivider from "../atoms/SecDivider.jsx";
import { useCart } from "../../hooks/useCart.jsx";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  // Cart
  const { toggleCart } = useCart();

  return (
    <nav className="px-8 py-4 flex justify-between items-center text-accent-dark bg-white mb-5 fixed top-0 right-0 left-0 z-50">
      {/*Navbar LogoWord */}
      <LogoWord>متجر بائعة الكتب</LogoWord>

      {/* Navbar Tabs Horizontal version*/}
      <NavTabs variant="horizontal" />

      {/* Navbar Icons */}
      <div className="flex gap-4">
        <NavIcon onClick={toggleCart} src={shoppingIcon} />
        <NavIcon
          className="max-md:block hidden"
          src={menuIcon}
          onClick={() => setShowMenu((prev) => !prev)}
        />
      </div>

      {/* Navbar Tabs Sidebar version */}
      <NavTabs
        variant="sidebar"
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
      />

      {/* Navbar divider*/}
      <SecDivider pos="bottom-0" />
    </nav>
  );
}

export default Navbar;
