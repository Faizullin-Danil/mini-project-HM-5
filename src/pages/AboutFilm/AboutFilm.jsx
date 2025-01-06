import { useLocation, useParams } from "react-router-dom"
import CommentBlock from "../../components/CommentBlock/CommentBlock"

const AboutFilm = () => {
    const location = useLocation()
    const { film } = location.state || {}

    return (
        <div>
            <h1>{film.Title}</h1>
            <h2>{film.Description}</h2>
            <p>Актеры: {film.Actors}</p>
            <p>{film.Category}</p>
            <p>Рейтинг: {film.Rate}</p>
            <CommentBlock/>
        </div>
    )
}
export default AboutFilm