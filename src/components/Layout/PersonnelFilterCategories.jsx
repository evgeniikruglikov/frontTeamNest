import React from "react";
import "./PersonnelFilterCategories.css";

function PersonnelFilterCategories({value, onChange}) {
    return (
        <div className="select-wrap">
            <select cslassName="category-select" value={value} onChange={onChange} defaultValue="">
                <option value="" disabled>
                    Категория
                </option>
                <option value="example1">example1</option>
                <option value="example2">example2</option>
                <option value="example3">example3</option>
                <option value="example4">example4</option>
                <option value="example5">example5</option>
            </select>
        </div>
    );
}   

export default PersonnelFilterCategories;