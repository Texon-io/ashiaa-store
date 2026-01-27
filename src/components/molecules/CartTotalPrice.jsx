import { useCart } from "../../hooks/useCart";

function CartTotalPrice() {
  const { totalPrice } = useCart();

  return (
    <div className="text-xl flex justify-between mb-3 font-semibold">
      <span>الإجمالي:</span>
      <span>{totalPrice} جنيه</span>
    </div>
  );
}

export default CartTotalPrice;
