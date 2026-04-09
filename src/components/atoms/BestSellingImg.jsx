import { placeHolder } from "../../utils/constants.js";

const IS_NETLIFY = window.location.hostname !== "localhost";

const optimizeImg = (url, width = 300) => {
  if (!url) return placeHolder;
  // Fallback in case it's already a netlify URL
  if (url.includes("/.netlify/images")) return url;
  if (!IS_NETLIFY) return url;
  return `/.netlify/images?url=${encodeURIComponent(url)}&w=${width}&q=80`;
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
