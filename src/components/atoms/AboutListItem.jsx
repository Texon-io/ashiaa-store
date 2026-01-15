function AboutListItem({ ImgPath, alt, children }) {
  return (
    <li className=" flex justify-start items-center gap-8">
      <img className=" w-12" src={ImgPath} alt={alt} />
      <span className="text-xl font-medium text-accent-dark">{children}</span>
    </li>
  );
}

export default AboutListItem;
