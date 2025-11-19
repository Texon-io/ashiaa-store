import Button from "../atoms/Button";
import CartTotalPrice from "../molecules/CartTotalPrice";

function CartFooter() {
  return (
    <div className="mt-4 border-t pt-4 ">
      <CartTotalPrice />
      <Button variant="dark" className="w-full text-md">
        {" "}
        إرسال الطلب عبر واتساب
      </Button>
    </div>
  );
}

export default CartFooter;
