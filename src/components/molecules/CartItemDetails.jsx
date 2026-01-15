function CartItemDetails({ name, price }) {
  return (
    <div className="flex-1 pr-2">
      <h3 className="font-semibold text-sm sm:text-base">{name}</h3>
      <p className="text-[14px] sm:text-base text-gray-700">{price} ج.م</p>
    </div>
  );
}

export default CartItemDetails;
