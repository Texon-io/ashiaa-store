import { Link } from "react-router-dom";

function CategoryCard({ imgPath, to, children }) {
  return (
    <div
      style={{ backgroundImage: `url(${imgPath})` }}
      id="card"
      className={`bg-accent-dark h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden shadow-md `}
    >
      <Link
        to={to}
        className="overlay bg-black/50 hover:bg-black/65 transition-all duration-300 ease-linear w-full h-full flex items-center justify-center"
      >
        <h4 className="font-reqaa text-secondary-text-light text-5xl shadow-2xl">
          {children}
        </h4>
      </Link>
    </div>
  );
}

export default CategoryCard;
