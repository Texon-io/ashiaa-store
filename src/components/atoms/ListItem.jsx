function ListItem({
  children,
  headTitle,
  bodyTitle,
  className = "",
  type = "horizontal",
}) {
  // Shared style for icon container
  const iconStyle = `bg-white rounded-full p-2.5 ${className}`;

  // Vertical layout (for social icons, etc.)
  if (type === "vertical") {
    return (
      <li className="flex flex-col items-center gap-3">
        <div className={`${iconStyle} p-3`}>{children}</div>
        <h5 className="opacity-80 text-accent-dark-2 font-semibold">
          {headTitle}
        </h5>
      </li>
    );
  }

  // Default horizontal layout (for contact info)
  return (
    <li className="flex max-[540px]:flex-col items-start sm:items-center gap-3 text-accent-dark">
      <div className={iconStyle}>{children}</div>
      <div className="flex flex-col gap-1 font-medium">
        <h5 className="opacity-80">{headTitle}</h5>
        {bodyTitle && (
          <p className="text-accent-dark-2 font-semibold tracking-wider">
            {bodyTitle}
          </p>
        )}
      </div>
    </li>
  );
}

export default ListItem;
