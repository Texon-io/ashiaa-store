import QuantityBtn from "../atoms/QuantityBtn";

function CartItemQuantity({ item, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="flex items-center gap-3 border-2 border-accent-dark p-1 rounded-3xl">
      <QuantityBtn id={item.id} onClick={decreaseQuantity}>
        -
      </QuantityBtn>

      <span className="font-semibold">{item.quantity}</span>
      <QuantityBtn id={item.id} onClick={increaseQuantity}>
        +
      </QuantityBtn>
    </div>
  );
}

export default CartItemQuantity;
