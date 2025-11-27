import "./WhiteButton.css";

function WhiteButton( {children, width, height, onClick, fontSize, className, background, color} ) {
    return (
        <button className={`white-button ${className || ""}`} onClick={onClick} style={{width: width ? `${width}px` : undefined, height: height ? `${height}px` : undefined, fontSize: fontSize ? `${fontSize}px` : undefined, background: background || undefined, color: color || undefined}}>
            {children}
        </button>
    );
}

export default WhiteButton;
