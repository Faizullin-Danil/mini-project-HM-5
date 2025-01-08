import { useLocation } from "react-router-dom";
import MultiSelect from "../../components/MultiSelect/MultiSelect";
import Input from "../../components/Input/Input";
import MyButton from "../../components/MyButton/MyButton";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "./SearchFilms.css"
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite, toggleWatchLater } from "../../store/actions/toggleActions";

const SearchFilm = () => {
    const [foundFilms, setFoundFilms] = useState([]); 
    const [selectedOptions, setSelectedOptions] = useState([]); 
    const [filmName, setFilmName] = useState("")

    const location = useLocation();
    const { films } = location.state || { films: [] };

    const dispatch = useDispatch();
    const favourites = useSelector(state => state.toggle.favourites);
    const watchLater = useSelector(state => state.toggle.watchLater);


    console.log({films})

    const searchByCategory = (event) => {
        event.preventDefault(); 

        const filteredFilms = films.filter(film => 
            selectedOptions.some(option => film.Category.includes(option.value))
        );

        setFoundFilms(filteredFilms);
    };

    const searchByName = (event) => {
        event.preventDefault();

        const filteredFilms = films.filter(film => 
            film.Title.toLowerCase().includes(filmName.toLowerCase())
        );
        

        setFoundFilms(filteredFilms)  
    }

    const HandletoggleFavourite = (id) => {
            dispatch(toggleFavourite(id))
        };
    
        const HandletoggleWatchLater = (id) => {
            dispatch(toggleWatchLater(id))
        };

    return (
        <div>
            <form>
                <div className="search">
                    <MultiSelect selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
                    <MyButton text={"Поиск фильма по жанру"} onClick={searchByCategory} />
                </div>
                <div className="search">
                    <Input inputName={"Название фильма"} type={"text"} placeholder={"Введите название фильма"} onChange={e => setFilmName(e.target.value)}/>
                    <MyButton text={"Поиск фильма по названию"} onClick={searchByName} />
                </div>
            </form>
            <div>
                <h2>Найденные фильмы:</h2>
                {foundFilms.length > 0 ? (
                    foundFilms.map((film) => (
                        <Card
                            key={film.id}
                            film={film}
                            films={films}
                            isFavourite={favourites.includes(film.id)}
                            isWatchLater={watchLater.includes(film.id)}
                            toggleFavourite={() => HandletoggleFavourite(film.id)}
                            toggleWatchLater={() => HandletoggleWatchLater(film.id)}
                        />
                    ))
                ) : (
                    <p>Фильмы не найдены</p>
                )}
            </div>
        </div>
    );
};

export default SearchFilm;
