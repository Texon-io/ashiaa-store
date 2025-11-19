import { useCart } from "../../hooks/useCart";
import Button from "../atoms/Button";
import CartItem from "../organisms/CartItem";

export default function Cart() {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300
          ${
            isCartOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleCart}
      />

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[420px] bg-white shadow-xl rounded-l-2xl
          transition-transform duration-300 ease-out z-50
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-5 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">سلة المشتريات</h2>
            <button onClick={toggleCart} className="text-xl font-bold">
              ✕
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 && (
              <p className="text-center text-gray-500 mt-10">
                السلة فارغة حالياً
              </p>
            )}

            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between mb-3 font-semibold">
              <span>الإجمالي:</span>
              <span>{totalPrice} جنيه</span>
            </div>

            {/* <button className="w-full bg-[#341413] text-white rounded-lg py-3 text-sm">
              إرسال الطلب عبر واتساب
            </button> */}

            <Button variant="dark" className="w-full text-md">
              {" "}
              إرسال الطلب عبر واتساب
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
