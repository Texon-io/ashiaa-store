import {Link} from "react-router";

function Button({
  variant = "main",
  children,
  onClick,
  className = "",
  size = "md", // sm, md, or lg
  type = "button",  // button, reset, link
  disabled,
to="", // for path of link

}) {
  // Base styles for all buttons
  const base = `border-accent-dark border-2 px-4 py-3 font-medium text-lg rounded-xl cursor-pointer transition-all duration-300 m-1 shadow-lg hover:shadow-xl `;

  // Different visual variants
  const styles = {
    main: base + " bg-accent-dark text-white opacity-95 hover:opacity-100",
    secondary: base + " text-accent-dark hover:bg-accent-dark hover:text-white",
    dark: base + " border-1 border-secondary-text-light text-secondary-text-light bg-accent-dark hover:bg-secondary-text-light hover:text-accent-dark transition-colors duration-300",
    pagination:
      " cursor-pointer rounded-md bg-accent-main/65 hover:bg-accent-main/75 transition-colors duration-300 disabled:opacity-50",
  };

  // Different sizes
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-lg",
    lg: "px-6 py-4 text-xl",
  };

  if (type ==="link"){
      return (
          <Link
              to={to}
              type={type} // button type (button, submit, reset, Link)
              onClick={onClick} // click handler
              className={`${styles[variant]} ${className} ${sizes[size]} `}
          >
              {children} {/*button label/content*/}
          </Link>
      );
  }

    return (
        <button
            disabled={disabled}
            type={type} // button type (button, submit, reset, Link)
            onClick={onClick} // click handler
            className={`${styles[variant]} ${className} ${sizes[size]} `}
        >
            {children} {/*button label/content*/}
        </button>
    );
}

export default Button;
