import { useCart } from "../../hooks/useCart";
import BestSellingImg from "../atoms/BestSellingImg";
import Button from "../atoms/Button";

export default function BestSellingProduct({ product }) {
  const { addToCart } = useCart();

  const { id, name, price, main_image, description, stock, colors } = product;
  const isOutOfStock = stock <= 0;

  const handleAdd = () => {
    if (!isOutOfStock) {
      addToCart({ id, name, price, main_image });
    }
  };

  return (
    <div
      className={`bg-card-bg rounded-xl shadow-md p-3 cursor-default flex flex-col transition duration-300 ${isOutOfStock ? "opacity-75" : "hover:scale-102 hover:shadow-xl"}`}
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

      <div className="mt-3 grow">
        <h3 className="text-center font-semibold text-main-text text-lg">
          {name}
        </h3>

        <p className="p-2 text-center text-sm text-accent-dark-2 truncate">
          {description}
        </p>

        <div className={`my-2 flex justify-between items-center h-4`}>
          <span className={`text-xs opacity-75`}>
            {colors && "الألوان المتاحة:"}
          </span>
          <div className="flex gap-1.5 flex-row-reverse">
            {colors?.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className="w-4 h-4 rounded-full border border-black/20 shadow-sm hover:scale-115 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        <p className="text-center text-md font-semibold text-gray-600 mt-1">
          {price} ج.م
        </p>
      </div>

      <Button
        size="sm"
        className="mt-4 w-full disabled:cursor-not-allowed disabled:opacity-50"
        onClick={handleAdd}
        disabled={isOutOfStock}
      >
        {isOutOfStock ? "غير متوفر" : "إضافة إلى السلة"}
      </Button>
    </div>
  );
}
