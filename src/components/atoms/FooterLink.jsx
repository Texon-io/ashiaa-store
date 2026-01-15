import { Link } from "react-router";

function FooterLink({ path, children }) {
  return (
    <li>
      <Link to={path} className="hover:text-accent-dark text-base transition">
        {children}
      </Link>
    </li>
  );
}

export default FooterLink;
