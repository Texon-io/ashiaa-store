import { useCart } from "../../hooks/useCart";
import CartOverlay from "../atoms/CartOverlay";
import CartFooter from "../organisms/CartFooter";
import CartHeader from "../organisms/CartHeader";
import CartItemsList from "../organisms/CartItemsList";

export default function Cart() {
  const { isCartOpen, cartItems } = useCart();

  return (
    <div>
      {/* Overlay */}
      <CartOverlay />

      {/* Cart Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[375px] sm:w-[500px] z-[100] bg-white shadow-2xl rounded-2xl
          transition-transform duration-300 ease-out
          ${isCartOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 h-full flex flex-col">
          {/* Header */}
          <CartHeader />

          {/* Cart Items */}
          <CartItemsList />

          {/* Footer */}
          <CartFooter />
        </div>
      </div>
    </div>
  );
}
