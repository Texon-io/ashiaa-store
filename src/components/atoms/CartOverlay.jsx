import { useCart } from "../../hooks/useCart";

function CartOverlay() {
  const { isCartOpen, toggleCart } = useCart();
  return (
    <div
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300
          ${
            isCartOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      onClick={toggleCart}
    />
  );
}

export default CartOverlay;
