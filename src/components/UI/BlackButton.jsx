import "./BlackButton.css";

function BlackButton( {children, width, height, onClick, fontSize, className, background, color} ) {
    return (
        <button className={`black-button ${className || ""}`} onClick={onClick} style={{width: width ? `${width}px` : undefined, height: height ? `${height}px` : undefined, fontSize: fontSize ? `${fontSize}px` : undefined, background: background || undefined, color: color || undefined}}>
            {children}
        </button>
    );
}

export default BlackButton;
