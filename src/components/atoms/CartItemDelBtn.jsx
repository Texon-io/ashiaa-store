import { Trash } from "lucide-react";

import { useCart } from "../../hooks/useCart";
import { toast } from "sonner";

function CartItemDelBtn({ id }) {
  const { removeFromCart } = useCart();

  return (
    <button
      className="cursor-pointer mx-1"
      onClick={() => {
        toast.error("هل تريد حذف المنتج؟", {
          cancel: {
            label: "نعم",
            onClick: () => removeFromCart(id),
          },
        });
      }}
    >
      <Trash size={22} color="#f11e1e" strokeWidth={2} />
    </button>
  );
}

export default CartItemDelBtn;
