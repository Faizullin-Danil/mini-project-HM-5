import React, { useState } from "react";
import Select from "react-select";
import "./MultiSelect.css"

const options = [
    { value: "Научная фантастика", label: "Научная фантастика" },
    { value: "Драма", label: "Драма" },
    { value: "Криминал", label: "Криминал" },
    { value: "Фэнтези", label: "Фэнтези" },
    { value: "Триллер", label: "Триллер" },
    { value: "Боевик", label: "Боевик" },
    { value: "Комедия", label: "Комедия" },
    { value: "Психологический", label: "Психологический" },
    { value: "Приключения", label: "Приключения" },
];

const MultiSelect = ({selectedOptions, setSelectedOptions}) => {
    
    return (
        <div className="multiselect">
            <Select
                isMulti
                options={options}
                value={selectedOptions}
                onChange={setSelectedOptions}
                placeholder="Выберите жанр"
            />
        </div>
    );
};

export default MultiSelect;
