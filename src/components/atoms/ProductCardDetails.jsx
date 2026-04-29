import Button from "./Button.jsx";

const ProductCardDetails = ({ product }) => {
  const { id, name, description, image, price, stock, onAddToCart, colors } =
    product;

  console.log(colors ? colors : "no color");

  return (
    <div className="card-data py-4 px-4 flex flex-col items-end gap-3 min-h-[180px] justify-between">
      <div className="w-full space-y-1">
        {/* Product Name */}
        <h5 className="card-name font-semibold w-full font-tajawal text-xl text-accent-dark-2">
          {name}
        </h5>

        {/* Short Description */}
        <p className="card-description w-full text-accent-dark/70 font-medium text-sm line-clamp-2">
          {description}
        </p>
      </div>

      {/* Colors Section */}
      <div className="w-full flex justify-between items-end gap-2 my-2">
        <span className="text-[11px] uppercase tracking-wider text-accent-dark/50 font-bold">
          {colors ? "الألوان المتاحة:" : ""}
        </span>
        <div className="flex gap-1.5 flex-row-reverse">
          {colors?.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="w-4 h-4 rounded-full border border-black/20 shadow-sm hover:scale-115 transition-transform duration-300"
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Price and Stock info */}
      <div className="card-Price-stock flex justify-between items-center w-full mt-1">
        <p className="font-bold text-xl text-accent-dark-2 flex items-baseline">
          {price}{" "}
          <span className="mx-1 text-xs font-normal text-accent-dark/70">
            ج.م
          </span>
        </p>

        {stock <= 0 && (
          <p className="font-bold text-sm px-2 py-1 rounded">نفذ من المخزن</p>
        )}
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={() => onAddToCart({ name, price, image, id })}
        className="w-full mx-0 mt-1 disabled:opacity-40 disabled:grayscale disabled:cursor-not-allowed"
        size={"sm"}
        disabled={stock === 0}
      >
        {stock === 0 ? "غير متوفر حالياً" : "أضف إلى السلة"}
      </Button>
    </div>
  );
};
export default ProductCardDetails;
