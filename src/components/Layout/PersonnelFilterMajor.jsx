import React from "react";
import "./PersonnelFilterCategories.css";

function PersonnelFilterMajor({value, onChange, category}) {
    const specialties = {
        example1: ["специальность 1", "специальность 2", "специальность 3"],
        example2: ["специальность А", "специальность Б", "специальность В"],
        example3: ["специальность тест", "специальность 123", "специальность абв"],
    }

    const options = category && specialties[category] ? specialties[category] : [];

    return (
        <div className="select-wrap">
            <select cslassName="major-select" value={value} onChange={onChange} disabled={!category} defaultValue="">
                <option value="" disabled>
                    {category ? "Специальность" : "Категория не выбрана"}
                </option>
                {options.map((spec) => (
                    <option key={spec} value={spec}>
                        {spec}
                    </option>
                ))}
            </select>
        </div>
    );
}   

export default PersonnelFilterMajor;