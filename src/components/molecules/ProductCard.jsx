import ProductCardDetails from "../atoms/ProductCardDetails.jsx";

function Card({ data, onAddToCart }) {
    const tempImg = `data:image/jpeg;base64,...`;

    const {
        ImageURL = tempImg,
        Name = "Product",
        Description = "",
        Category = "General",
        Price = 0,
        Stock = 0,
    } = data;

    return (
        <div className="rounded-lg max-w-60 bg-accent-main/30 min-h-[420px] shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
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
