import React, { useState } from 'react';
import './Dropdown.css'; 
import MyButton from '../MyButton/MyButton';

const Dropdown = ({ films, setFilms }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [originalFilms] = useState(films); // Сохраняем исходный массив фильмов

    const options = ["Научная фантастика", "Драма", "Криминал", "Фэнтези"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const filter = (option) => {
        setSelectedOption(option);
        const filteredFilms = originalFilms.filter(film => film.Сategory === option); // Фильтруем исходный массив
        setFilms(filteredFilms);
        setIsOpen(false); // Закрываем выпадающий список после выбора
        console.log({ films }); 
        console.log({ originalFilms }); 
    };

    return (
        <div className="dropdown">
            <MyButton onClick={toggleDropdown} text={selectedOption || "Выберите опцию"} />

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