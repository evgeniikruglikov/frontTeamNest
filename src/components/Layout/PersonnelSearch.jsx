import React from "react";
import search from "../../assets/search.svg";
import "./PersonnelSearch.css";

function PersonnelSearch({value, onChange, placeholder="Поиск специалиста", onSearch}) {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onSearch?.();
        }
    };

    return (
        <div className="search-wrap">
            <input type="text" className="search-input" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} onKeyPress={handleKeyPress} />
            <button className="search-icon" onClick={onSearch}> 
                <img src={search} alt="лупа" />
            </button>
        </div>
    );
}

export default PersonnelSearch;