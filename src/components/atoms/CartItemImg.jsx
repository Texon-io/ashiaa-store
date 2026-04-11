import { placeHolder } from "../../utils/constants.js";

const IS_NETLIFY = window.location.hostname !== "localhost";

const optimizeImg = (url, width = 100) => {
  if (!url) return placeHolder;
  // Always use weserv for proxying/caching to save Supabase egress
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=80&output=webp`;
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
