import { Link } from "react-router";

function CategoryCard({ imgPath, to, children }) {
  console.log(imgPath);
  return (
    <div
      id="card"
      className={`bg-accent-dark-2 bg-[url('${imgPath}')] h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden shadow-md`}
    >
      <Link
        to={to}
        className="overlay bg-black/60 hover:bg-black/75 transition-all duration-300 ease-linear w-full h-full flex items-center justify-center"
      >
        <h4 className="font-reqaa text-secondary-text-light text-5xl shadow-2xl">
          {children}
        </h4>
      </Link>
    </div>
  );
}

export default CategoryCard;
