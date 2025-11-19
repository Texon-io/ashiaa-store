import ProductCardDetails from "../atoms/ProductCardDetails.jsx";
import { placeHolder } from "../../utils/constants.js";

function Card({ data, onAddToCart, showModal, setData }) {
  const tempImg = placeHolder;

  const {
    ImageURL,
    Name = "اسم المنتج",
    Description = "منتج مكتبي رفيع من بائعة الكتب",
    Category = "All",
    Price = 0,
    Stock = 0,
  } = data;

  return (
    <div className="rounded-lg min-w-[350px] sm:min-w-72 bg-accent-main/25 min-h-[420px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div
        className="overflow-hidden rounded-t-lg min-w-[300px] min-h-[250px] w-full cursor-pointer"
        onClick={() => {
          setData(data);
          showModal((prev) => !prev);
        }}
      >
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src={ImageURL || tempImg}
          alt={`${Category}: ${Name}`}
        />
      </div>

      {/* Pass only the needed props about the details of product*/}
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
