function QuantityBtn({ onClick, id, children }) {
  return (
    <button
      className="px-2 font-medium bg-secondary-text-light rounded-full flex justify-center items-center cursor-pointer"
      onClick={() => onClick(id)}
    >
      {children}
    </button>
  );
}

export default QuantityBtn;
