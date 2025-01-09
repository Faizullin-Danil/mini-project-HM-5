import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite, toggleWatchLater } from "../../store/actions/toggleActions.js";
import Card from "../../components/Card/Card.jsx";
import MyButton from "../../components/MyButton/MyButton.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import "./MainPage.css";
import { Link } from "react-router-dom";

const MainPage = ({films, setFilms}) => {
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.toggle.favourites);
    const watchLater = useSelector(state => state.toggle.watchLater);


    const SortMax = () => {
        const sortedFilms = [...films].sort((a, b) => b.Rate - a.Rate);
        setFilms(sortedFilms);
    };

    const SortMin = () => {
        const sortedFilms = [...films].sort((a, b) => a.Rate - b.Rate);
        setFilms(sortedFilms);
    };

    const HandletoggleFavourite = (id) => {
        dispatch(toggleFavourite(id))
    };

    const HandletoggleWatchLater = (id) => {
        dispatch(toggleWatchLater(id))
    };

    return (
        <div>
            <div className="button">
                <MyButton onClick={SortMin} text={"По возрастанию рейтинга"} />
                <MyButton onClick={SortMax} text={"По убыванию рейтинга"} />
                <Dropdown films={films} setFilms={setFilms} />
                <p>
                    <Link to={"/searchfilm"} state={{films, favourites, watchLater}}>Перейти на страницу поиска</Link>
                </p>
                
            </div>
            {films.map((film) => (
                <Card
                    key={film.id}
                    film={film}
                    films={films}
                    isFavourite={favourites.includes(film.id)}
                    isWatchLater={watchLater.includes(film.id)}
                    toggleFavourite={() => HandletoggleFavourite(film.id)}
                    toggleWatchLater={() => HandletoggleWatchLater(film.id)}
                />
            ))}
        </div>
    );
};

export default MainPage;