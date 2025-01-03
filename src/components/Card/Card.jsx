import './Card.css';
import Icon from "../Icon/Icon.jsx";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { IoTimer } from "react-icons/io5";
import { Link } from "react-router-dom"

const Card = ({ props, isFavourite, isWatchLater, toggleFavourite, toggleWatchLater }) => {
    return (
        <div className="card">
            <Icon icon={isFavourite ? <FaStar /> : <CiStar />} onClick={toggleFavourite} />
            <Icon icon={isWatchLater ? <IoTimer /> : <IoTimerOutline />} onClick={toggleWatchLater} />
            <h1>
                <Link to={`/aboutfilm/${props.id}`}>{props.Title}</Link>
            </h1>
            <h2>{props.Description}</h2>
            <p>{props.Actors}</p>
            <p>{props.Category}</p>
            <p>{props.Rate}</p>
        </div>
    );
};

export default Card;