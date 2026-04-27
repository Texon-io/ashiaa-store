import { placeHolder } from "../../utils/constants.js";

const optimizeImg = (url, width = 300) => {
  if (!url) return placeHolder;
  // Always use weserv for proxying/caching to save Supabase egress
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=80&output=webp`;
};

function BestSellingImg({ image, name }) {
  const optimizedUrl = image ? optimizeImg(image, 300) : "/images/product-placeholder.png";

  return (
    <figure className="w-full h-56 rounded-lg overflow-hidden">
      <img
        src={optimizedUrl}
        alt={name}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        onError={(e) => {
          e.target.src = placeHolder;
        }}
      />
    </figure>
  );
}

export default BestSellingImg;
