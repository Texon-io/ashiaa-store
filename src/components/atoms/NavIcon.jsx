

function NavIcon({onClick,src, className}) {
    return (
        <div className={`nav-icons bg-secondary/15 p-1.5 rounded-lg pb-0 ${className || ""}`}>
            <button onClick={onClick} className={`cursor-pointer main-hover`}>
                <img src={src} alt={`Menu icon`} width={28} height={28}/>
            </button>
        </div>
    )
}

export default NavIcon;
