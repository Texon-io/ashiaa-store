import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    itemCount,
    totalPrice,
    isCartOpen,
    toggleCart,
  } = useContext(CartContext);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    itemCount,
    totalPrice,
    isCartOpen,
    toggleCart,
  };
}
