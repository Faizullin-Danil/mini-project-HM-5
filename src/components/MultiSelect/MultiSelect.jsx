import React, { useState } from "react";
import Select from "react-select";
import "./MultiSelect.css"

const options = [
    { value: "Научная фантастика", label: "Научная фантастика" },
    { value: "Драма", label: "Драма" },
    { value: "Криминал", label: "Криминал" },
    { value: "Фэнтези", label: "Фэнтези" } 
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
