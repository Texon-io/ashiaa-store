function LogoWord({ children, className }) {
  return (
    <div
      className={`nav-logo font-reqaa text-3xl text-accent-dark-2 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

export default LogoWord;
