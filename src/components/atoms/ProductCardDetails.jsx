import Button from "./Button.jsx";

const ProductCardDetails = ({
  name,
  description,
  price,
  stock,
  onAddToCart,
}) => {
  return (
    <div className="card-data py-0 px-4 flex flex-col items-end gap-0 min-h-64 justify-evenly">
      {/* product Name */}
      <h5 className="card-name font-semibold w-full font-tajawal text-xl text-accent-dark-2 ">
        {name}
      </h5>

      {/* short Description */}
      <p className="card-description w-full text-accent-dark/70 font-medium text-sm line-clamp-2">
        {description}
      </p>

      {/* Price and Stock info */}
      <div className="card-Price-stock flex justify-between items-center w-full">
        <p className="font-semibold text-xl text-accent-dark-2 flex ">
          {price} <span className="mx-1">ج.م</span>
        </p>
        <p className="card-stock text-accent-dark/70 font-medium text-sm">
          الكمية: <span className="text-accent-dark-2">{stock}</span>
        </p>
      </div>

      {/* add to cart button */}
      <Button onClick={onAddToCart} className="w-full mx-0 mt-2" size={"sm"}>
        أضف إلى السلة
      </Button>
    </div>
  );
};
export default ProductCardDetails;
