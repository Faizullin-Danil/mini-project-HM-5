import './Card.css';
import Icon from "../Icon/Icon.jsx";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { IoTimer } from "react-icons/io5";
import { Link } from "react-router-dom"

const Card = ({ films, film, isFavourite, isWatchLater, toggleFavourite, toggleWatchLater }) => {

    return (
        <div className="card">
            <Icon icon={isFavourite ? <FaStar /> : <CiStar />} onClick={toggleFavourite} />
            <Icon icon={isWatchLater ? <IoTimer /> : <IoTimerOutline />} onClick={toggleWatchLater} />
            <h1>
                <Link to={`/films/${film.id}`} state={{films, film}}>{film.Title}</Link>
            </h1>
            <h2>{film.Description}</h2>
            <p>Актеры: {film.Actors}</p>
            <p>{film.Category.join(", ")}</p>
            <p>Рейтинг: {film.Rate}</p>
        </div>
    );
};

export default Card;