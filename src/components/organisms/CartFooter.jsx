import Button from "../atoms/Button";
import CartTotalPrice from "../molecules/CartTotalPrice";
import { useEffect, useMemo } from "react";
import { useCart } from "../../hooks/useCart.jsx";
import { useWhatsappOrder } from "../../hooks/useWhatsappOrder.js";

const PHONE = "+201122732600";

function CartFooter() {
  const { cartItems, clearCart } = useCart();
  const { sendOrder } = useWhatsappOrder(cartItems, PHONE);

  function handleOrder() {
    sendOrder();
    // clearCart();
  }
  return (
    <div className="mt-4 border-t pt-4 ">
      <CartTotalPrice />
      {cartItems.length !== 0 && (
        <Button onClick={handleOrder} variant="dark" className="w-full text-md">
          {" "}
          إرسال الطلب عبر واتساب
        </Button>
      )}
    </div>
  );
}

export default CartFooter;
