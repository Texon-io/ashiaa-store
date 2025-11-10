import { useState } from "react";
import NavIcon from "../atoms/NavIcon.jsx";
import NavTabs from "../atoms/NavTabs.jsx";
import { menuIcon, shoppingIcon } from "../../utils/constants.js";
import Logo from "../atoms/Logo.jsx";

function Navbar({ openCart }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="px-8 py-4 flex justify-between items-center text-accent-dark relative mb-5">
            {/*Navbar Logo */}
            <Logo>متجر بائعة الكتب</Logo>


            {/* Navbar Tabs Horizontal version*/}
            <NavTabs variant="horizontal" />


            {/* Navbar Icons */}
            <div className="flex gap-4">
                <NavIcon onClick={openCart} src={shoppingIcon} />
                <NavIcon
                    className="max-md:block hidden"
                    src={menuIcon}
                    onClick={() => setShowMenu(prev => !prev)}
                />
            </div>

            {/* Navbar Tabs Sidebar version */}
            <NavTabs
                variant="sidebar"
                isOpen={showMenu}
                onClose={() => setShowMenu(false)}
            />

            {/* Navbar divider*/}
            <div className={`absolute bg-accent-dark left-8 right-8 bottom-0 h-[2px] opacity-30 rounded-xl`}></div>
        </nav>
    );
}

export default Navbar;
