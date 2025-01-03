import { useParams } from "react-router-dom"

const AboutFilm = () => {
    const { id } = useParams()

    return (
        <div>
            <h1>Фильм с id: {id}</h1>
        </div>
    )
}
export default AboutFilm