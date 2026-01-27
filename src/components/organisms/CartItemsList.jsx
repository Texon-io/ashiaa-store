import { useCart } from "../../hooks/useCart";
import ClearCartBtn from "../atoms/ClearCartBtn";
import CartItem from "../molecules/CartItem";

function CartItemsList() {
  const { cartItems } = useCart();
  const isEmpty = cartItems.length === 0;
  return (
    <ul id="cart-items" className="flex-1 overflow-y-auto space-y-4 ">
      {isEmpty && (
        <p className="text-center text-2xl text-gray-600 mt-10">
          السلة فارغة حالياً
        </p>
      )}

      {isEmpty || <ClearCartBtn />}

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default CartItemsList;
