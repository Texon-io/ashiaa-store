function SocialIcon({ url, customClass = "", imgPath, alt }) {
  return (
    <a target="_blank" href={url} className={`w-10 flex ${customClass}`}>
      <img src={imgPath} alt={alt} />
    </a>
  );
}

export default SocialIcon;
