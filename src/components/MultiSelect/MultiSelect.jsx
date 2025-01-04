import { useState } from "react";

const MultiSelect = () => {
    const [selectedValues, setSelectedValues] = useState([]);

    const handleChange = (event) => {
        const values = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedValues(values);
    };

    return (
        <div>
            <select multiple value={selectedValues} onChange={handleChange}>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <h3>Выбрано:</h3>
            <ul>
                {selectedValues.map(value => (
                    <li key={value}>{value}</li>
                ))}
            </ul>
        </div>
    );
};

export default MultiSelect;
