import CartItemQuantity from "../molecules/CartItemQuantity";
import CartItemDetails from "../molecules/CartItemDetails";
import CartItemImg from "../atoms/CartItemImg";
import CartItemDelBtn from "../atoms/CartItemDelBtn";

export default function CartItem({ item }) {
  return (
    <li id="cart-item" className="flex gap-3 items-center  mb-3 py-2">
      <CartItemImg image={item.image} name={item.name} />

      <CartItemDetails name={item.name} price={item.price} />

      <CartItemQuantity item={item} />

      <CartItemDelBtn id={item.id} />
    </li>
  );
}
