import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SideBar = ({films}) => {
    const favourites = useSelector(state => state.toggle.favourites);
    const watchLater = useSelector(state => state.toggle.watchLater);

    
    const favouritesFilms = films.filter(film => favourites.includes(film.id))
    const watchLaterFilms = films.filter(film => watchLater.includes(film.id))

    
    return (
        <div>
            <h2>Избранное:</h2>
            {favouritesFilms.map((favouriteFilm) => (
                <h3 key={favouriteFilm.id}>
                    <Link to={`/films/${favouriteFilm.id}`} state={{films, favouriteFilm}}>{favouriteFilm.Title}</Link>
                </h3>
            ))}
            <h2>Посмотреть позже:</h2>
            {watchLaterFilms.map(watchLaterFilm => (
                <h3 key={watchLaterFilm.id}>
                    <Link to={`/films/${watchLaterFilm.id}`} state={{films, watchLaterFilm}}>{watchLaterFilm.Title}</Link>
                </h3>
            ))}
        </div>
    )
}
export default SideBar