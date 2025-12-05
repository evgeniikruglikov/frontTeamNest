function CustomSelect ({value, onChange, placeholder, options, disabled=false}) {
    return (
        <div className="custom-select-wrap">
            <select className="custom-select" value={value} onChange={onChange} disabled={disabled}>
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CustomSelect;