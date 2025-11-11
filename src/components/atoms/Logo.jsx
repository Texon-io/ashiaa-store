function Logo({children, className}) {
    return (
        <div className={`nav-logo font-reqaa text-2xl ${className ||""}`}>{children}</div>
    )
}

export default Logo;
