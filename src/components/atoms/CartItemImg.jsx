function CartItemImg({ image, name }) {
  return (
    <img src={image} alt={name} className="w-16 h-16 rounded-lg object-cover" />
  );
}

export default CartItemImg;
