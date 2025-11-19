function CartItemDetails({ name, price }) {
  return (
    <div className="flex-1">
      <h3 className="font-semibold text-sm">{name}</h3>
      <p className="text-[14px] text-gray-700">{price} ج.م</p>
    </div>
  );
}

export default CartItemDetails;
