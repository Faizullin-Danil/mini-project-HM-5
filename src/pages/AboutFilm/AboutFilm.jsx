import { useLocation, useParams } from "react-router-dom"

const AboutFilm = () => {
    const location = useLocation()
    const { film } = location.state || {}

    return (
        <div>
            <h1>{film.Title}</h1>
            <h2>{film.Description}</h2>
            <p>{film.Actors}</p>
            <p>{film.Category}</p>
            <p>{film.Rate}</p>
        </div>
    )
}
export default AboutFilm