import ProductCardDetails from "../atoms/ProductCardDetails.jsx";
import {placeHolder} from "../../utils/constants.js";

function Card({ data, onAddToCart }) {
    const tempImg = placeHolder;

    const {
        ImageURL = tempImg,
        Name = "اسم المنتج",
        Description = "منتج مكتبي رفيع من بائعة الكتب",
        Category = "General",
        Price = 0,
        Stock = 0,
    } = data;

    return (
        <div className="rounded-lg max-w-60 bg-accent-main/20 min-h-[420px] shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="card-image-full overflow-hidden rounded-t-lg">
                <img className="w-full" src={ImageURL} alt={`product-${Name}`} />
            </div>

            {/* Pass only the needed props */}
            <ProductCardDetails
                name={Name}
                description={Description}
                category={Category}
                price={Price}
                stock={Stock}
                onAddToCart={onAddToCart}
            />
        </div>
    );
}

export default Card;
