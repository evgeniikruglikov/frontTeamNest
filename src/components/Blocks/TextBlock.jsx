import "./TextBlock.css";

function TextBlock({
  chip = null,
  title = null,
  sub = null,
  button = null,
  height = null,
  width = null,
  fontSize = null,
  style = {},
  children
}) {
  return (
    <div className="text-block" style={{ width, height, ...style }}>
      <div className="text-content" style={{ fontSize }}>
        {chip && <div className="text-chip">{chip}</div>}
        {title && <h1 className="text-main">{title}</h1>}
        {sub && <p className="text-sub">{sub}</p>}
        {children}
        {button}
      </div>
    </div>
  );
}

export default TextBlock;