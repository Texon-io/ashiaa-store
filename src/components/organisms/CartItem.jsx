import CartItemQuantity from "../molecules/CartItemQuantity";
import CartItemDetails from "../molecules/CartItemDetails";
import CartItemImg from "../atoms/CartItemImg";
import CartItemDelBtn from "../atoms/CartItemDelBtn";

export default function CartItem({ item, increaseQuantity, decreaseQuantity }) {
  console.log(item);
  return (
    <div id="cart-item" className="flex gap-3 items-center  mb-3 py-2">
      <CartItemImg image={item.image} name={item.name} />

      <CartItemDetails name={item.name} price={item.price} />

      <CartItemQuantity
        item={item}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      <CartItemDelBtn id={item.id} />
    </div>
  );
}
