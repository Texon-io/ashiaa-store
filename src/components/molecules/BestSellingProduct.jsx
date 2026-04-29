import { useCart } from "../../hooks/useCart";
import BestSellingImg from "../atoms/BestSellingImg";
import Button from "../atoms/Button";

export default function BestSellingProduct({ product }) {
  const { addToCart } = useCart();

  const { id, name, price, main_image, description, stock } = product;
  const isOutOfStock = stock <= 0;

  const handleAdd = () => {
    if (!isOutOfStock) {
      addToCart({ id, name, price, main_image });
    }
  };

  return (
    <div
      className={`bg-card-bg rounded-xl shadow-md p-3 flex flex-col transition duration-300 ${isOutOfStock ? "opacity-75" : "hover:scale-102 hover:shadow-xl"}`}
    >
      <div className="relative">
        <BestSellingImg image={main_image} name={name} />
        {isOutOfStock && (
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center rounded-lg">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600 border border-red-200 shadow-sm">
              نفذ من المخزن
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 flex-grow">
        <h3 className="text-center font-semibold text-main-text text-lg">
          {name}
        </h3>

        <p className="p-2 text-center text-sm text-accent-dark-2 truncate">
          {description}
        </p>

        <p className="text-center text-md font-semibold text-gray-600 mt-1">
          {price} ج.م
        </p>
      </div>

      <Button
        variant={isOutOfStock ? "disabled" : "main"}
        size="sm"
        className="mt-4 w-full"
        onClick={handleAdd}
        disabled={isOutOfStock}
      >
        {isOutOfStock ? "غير متوفر" : "إضافة إلى السلة"}
      </Button>
    </div>
  );
}
