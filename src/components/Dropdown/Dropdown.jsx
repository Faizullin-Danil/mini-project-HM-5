import React, { useState } from 'react';
import './Dropdown.css'; 
import MyButton from '../MyButton/MyButton';

const Dropdown = ({ films, setFilms }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [originalFilms] = useState(films); 

    const options = ["Научная фантастика", "Драма", "Криминал", "Фэнтези"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const filter = (option) => {
        setSelectedOption(option);
        const filteredFilms = originalFilms.filter(film => film.Category === option); 
        setFilms(filteredFilms);
        setIsOpen(false); 
        console.log({ films }); 
        console.log({ originalFilms }); 
    };

    return (
        <div className="dropdown">
            <MyButton onClick={toggleDropdown} text={selectedOption || "Выберите жанр"} />

            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index}>
                            <MyButton onClick={() => filter(option)} text={option} /> 
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;