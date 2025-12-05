import { useState } from "react";
import Select from "./Select";
import Search from "./Search";
import "./PersonnelFilters.css";

const categories = [
    {value:"development", label: "Разработка"},
    {value:"design", label: "Дизайн"},
    {value:"management", label: "Управление"},
    {value:"marketing", label: "Маркетинг"}
]

const specialties = {
    development: ["Frontend", "Backend", "Fullstack"],
    design: ["UI/UX", "Графический дизайн", "3D"],
    management: ["Проджект менеджер", "Продакт менеджер", "Тимлид"],
    marketing: ["SMM", "Таргет"]
}

function PersonnelFilters ({ onFilterChange }) {
    const [category, setCategory] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        onFilterChange?.({ category, specialty, search: search.trim() });
    };

    const currentSpecialties = category ? specialties[category] || [] : [];

    return (
        <div className="personnel-filters-container">
            <div className="filters-left">
                <Select 
                    value={category} 
                    onChange={(e) => {
                        setCategory(e.target.value); 
                        setSpecialty("");
                    }} 
                    placeholder="Категория" 
                    options={categories} 
                />

                <Select 
                    value={specialty} 
                    onChange={(e) => setSpecialty(e.target.value)} 
                    placeholder={category ? "Специальность" : "Категория не выбрана"} 
                    options={currentSpecialties.map((s) => ({ value: s, label: s}))} 
                    disabled={!category}
                />
            </div>
            <Search 
                value={search} 
                onChange={setSearch} 
                onSearch={handleSearch} 
            />
        </div>
    );
}

export default PersonnelFilters;