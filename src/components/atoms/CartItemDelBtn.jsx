import { Trash } from "lucide-react";

import { useCart } from "../../hooks/useCart";

function CartItemDelBtn({ id }) {
  const { removeFromCart } = useCart();

  return (
    <button className="cursor-pointer mx-1" onClick={() => removeFromCart(id)}>
      <Trash size={22} color="#f11e1e" strokeWidth={3} />
    </button>
  );
}

export default CartItemDelBtn;
