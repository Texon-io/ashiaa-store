import ProductCardDetails from "../atoms/ProductCardDetails.jsx";
import { placeHolder } from "../../utils/constants.js";
import { useCart } from "../../hooks/useCart.jsx";

function Card({ data, showModal, setData }) {
  // Add to cart
  const { addToCart } = useCart();
  const tempImg = placeHolder;

  const {
    main_image,
    name = "اسم المنتج",
    description = "منتج مكتبي رفيع من بائعة الكتب",
    category = "All",
    price = 0,
    stock = 0,
    id,
  } = data;

  return (
    <div className="rounded-lg min-w-full bg-accent-main/25 min-h-[420px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div
        className="overflow-hidden rounded-t-lg min-w-[300px] min-h-[250px] w-full cursor-pointer"
        onClick={() => {
          setData(data);
          showModal((prev) => !prev);
        }}
      >
        <img
          className="w-full h-[305px] object-cover transition-transform duration-500 hover:scale-105"
          src={main_image || tempImg}
          alt={`${category}: ${name}`}
        />
      </div>

      {/* Pass only the needed props about the details of product*/}
      <ProductCardDetails
        id={id}
        name={name}
        image={main_image}
        description={description}
        category={category}
        price={price}
        stock={stock}
        onAddToCart={addToCart}
      />
    </div>
  );
}

export default Card;
