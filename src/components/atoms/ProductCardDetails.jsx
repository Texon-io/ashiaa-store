import Button from "./Button.jsx";

const ProductCardDetails = ({name, description, price, stock, onAddToCart}) => {
    return (
        <div className="card-data p-3 px-4 text-right flex flex-col items-end gap-3 min-h-64 justify-evenly">
            {/* product Name */}
            <h5 className="card-name font-semibold font-tajawal text-xl text-accent-dark-2 ">
                {name}
            </h5>

            {/* short Description */}
            <p className="card-description text-accent-dark/70 font-medium text-sm line-clamp-2">
                {description}
            </p>

            {/* Price and Stock info */}
            <div className="card-Price-stock flex justify-between items-center w-full flex-row-reverse">
                <p className="font-semibold text-xl text-accent-dark-2 flex flex-row-reverse">
                    {price} <span className="mx-1">ج.م</span>
                </p>
                <p className="card-stock text-accent-dark/70 font-medium text-sm">
                    الكمية: <span className="text-accent-dark-2">{stock}</span>
                </p>
            </div>

            {/* add to cart button */}
            <Button onClick={onAddToCart} className="w-full mx-0 mt-2">
                أضف إلى السلة
            </Button>
        </div>
    )
}
export default ProductCardDetails;