import { useCart } from "../../hooks/useCart";

function CartHeader() {
  const { toggleCart } = useCart();
  return (
    <div className="flex justify-between items-center mb-4 pb-4 border-b border-accent-dark">
      <h2 className="text-3xl font-bold font-reqaa">سلة المشتريات</h2>
      <button onClick={toggleCart} className="text-xl font-bold cursor-pointer">
        ✕
      </button>
    </div>
  );
}

export default CartHeader;
