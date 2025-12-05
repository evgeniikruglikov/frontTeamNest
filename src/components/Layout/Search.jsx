import searchIcon from "../../assets/search.svg";

function SearchInput ({value, onChange, placeholder="Поиск специалиста", onSearch}) {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {onSearch?.();}
    };

    return(
        <div className="search-input-wrap">
            <input className="search-input" type="text" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} onKeyDown={handleKeyDown} />
            <button className="search-button" onClick={onSearch}>
                <img src={searchIcon} alt="lupa" />
            </button>
        </div>
    );
}

export default SearchInput;