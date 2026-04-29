import ProductCardDetails from "../atoms/ProductCardDetails.jsx";
import { placeHolder } from "../../utils/constants.js";
import { useCart } from "../../hooks/useCart.jsx";

function Card({ data, showModal, setData }) {
  const { addToCart } = useCart();

  const {
    main_image,
    name = "اسم المنتج",
    description = "منتج مكتبي رفيع من بائعة الكتب",
    category = "All",
    price = 0,
    stock = 0,
    colors = [],
    id,
  } = data;

  const optimizedImage = main_image
    ? `https://images.weserv.nl/?url=${encodeURIComponent(main_image)}&w=400&q=80&output=webp`
    : placeHolder;

  return (
    <div
      className={`rounded-lg min-w-full bg-accent-main/25 min-h-[420px] shadow-lg hover:shadow-xl transition-all duration-300 ${
        stock <= 0 ? "grayscale opacity-80" : "hover:-translate-y-2"
      }`}
    >
      <div
        className="relative overflow-hidden rounded-t-lg min-w-[300px] min-h-[250px] w-full cursor-pointer"
        onClick={() => {
          setData(data);
          showModal((prev) => !prev);
        }}
      >
        <img
          className={`w-full h-[305px] object-cover transition-transform duration-500 ${
            stock <= 0 ? "" : "hover:scale-105"
          }`}
          src={optimizedImage}
          alt={`${category}: ${name}`}
        />
      </div>

      <ProductCardDetails product={data} />
    </div>
  );
}

export default Card;
