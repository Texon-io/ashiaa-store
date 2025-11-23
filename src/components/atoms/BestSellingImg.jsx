function BestSellingImg({ image, name }) {
  return (
    <figure className="w-full h-56 rounded-lg overflow-hidden">
      <img
        src={image ? image : "/images/product-placeholder.png"}
        alt={name}
        className="w-full h-full object-cover"
      />
    </figure>
  );
}

export default BestSellingImg;
