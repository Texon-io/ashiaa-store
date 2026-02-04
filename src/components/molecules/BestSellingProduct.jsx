import { useCart } from "../../hooks/useCart";
import BestSellingImg from "../atoms/BestSellingImg";
import Button from "../atoms/Button";

export default function BestSellingProduct({
  id,
  name,
  price,
  image,
  description,
}) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="bg-card-bg rounded-xl shadow-md p-3 flex flex-col hover:scale-102 hover:shadow-xl transition duration-300">
      {/* Image */}
      <BestSellingImg image={image} name={name} />

      {/* Name and Price */}
      <div className="mt-3">
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

      {/* Add to Cart Button */}
      <Button
        variant="main"
        size="sm"
        className="mt-4 w-full"
        onClick={handleAdd}
      >
        {" "}
        إضافة إلى السلة
      </Button>
    </div>
  );
}
