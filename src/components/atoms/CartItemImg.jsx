import { placeHolder } from "../../utils/constants.js";

const IS_NETLIFY = window.location.hostname !== "localhost";

const optimizeImg = (url, width = 100) => {
  if (!url) return placeHolder;
  // If it's already a netlify optimized url, we might not want to re-wrap it, but since we are sending original url now, it's fine.
  if (url.includes("/.netlify/images")) return url;
  if (!IS_NETLIFY) return url;
  return `/.netlify/images?url=${encodeURIComponent(url)}&w=${width}&q=80`;
};

function CartItemImg({ image, name }) {
  const optimizedUrl = optimizeImg(image, 100);

  return (
    <img 
      src={optimizedUrl} 
      alt={name} 
      loading="lazy"
      decoding="async"
      className="w-16 h-16 rounded-lg object-cover" 
      onError={(e) => {
        e.target.src = placeHolder;
      }}
    />
  );
}

export default CartItemImg;
