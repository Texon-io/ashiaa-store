import { NavLink } from "react-router-dom";
// Nav items for dynamic loading
const links = [
  { path: "/", label: "الرئيسية" },
  { path: "/products", label: "المنتجات" },
  { path: "/contact", label: "تواصل معنا" },
];

function NavTabs({ variant = "horizontal", isOpen, onClose }) {
  /*
   * this code logic always render navbar tabs
   * if we pass variant as horizontal, so it rendered at normal tabs
   * but if we pass it as vertical , so it rendered as sidebar menu for responsive design
   *
   * */

  if (variant === "sidebar") {
    return (
      <>
        {/* Overlay as background*/}
        <div
          className={`fixed inset-0 bg-black/30 transition-opacity duration-300 z-40 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={onClose}
        ></div>

        {/* Sliding Menu */}
        <aside
          className={`
            fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out will-change-transform

            ${isOpen ? "translate-x-0" : "translate-x-full"}
            z-50 p-6 flex flex-col gap-6
          `}
        >
          <button
            onClick={onClose}
            className="self-end text-xl font-bold mb-4 cursor-pointer main-hover"
          >
            &times;
          </button>

          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `transition-all duration-150 ${
                      isActive ? "font-semibold text-accent-dark" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
      </>
    );
  }

  // horizontal mode
  return (
    <ul className="nav-links flex justify-evenly gap-10 text-shadow-2xs max-md:hidden">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `hover:text-accent-dark/85 transition-all duration-150 ${
                isActive ? "font-semibold" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
