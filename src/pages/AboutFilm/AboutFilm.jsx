import { useLocation, useParams, Link } from "react-router-dom";
import CommentBlock from "../../components/CommentBlock/CommentBlock";
import { useEffect, useState } from "react";
import "./AboutFilm.css";

const AboutFilm = () => {
    const { id } = useParams(); 
    const location = useLocation();
    const { films } = location.state || {}; 
    const [film, setFilm] = useState(null); 
    const [similarFilms, setSimilarFilms] = useState([]);

    useEffect(() => {
        if (!films || !id) return;

        const currentFilm = films.find(f => f.id === parseInt(id)); 
        setFilm(currentFilm); 

    }, [id, films]);

    useEffect(() => {
        if (!film) return;

        const filmCategories = film.Category;

        const filteredFilms = films.filter(f => {
            if (f.id === film.id) return false;

            const fCategories = f.Category;
            const commonCategories = fCategories.filter(cat => filmCategories.includes(cat));

            return commonCategories.length >= 2; 
        });

        setSimilarFilms(filteredFilms); 

    }, [film, films]); 

    if (!film) return <p>Фильм не найден</p>;

    return (
        <div>
            <h1>{film.Title}</h1>
            <h2>{film.Description}</h2>
            <p>Актеры: {film.Actors}</p>
            <p>Категории: {film.Category.join(", ")}</p>
            <p>Рейтинг: {film.Rate}</p>
            <hr style={{ border: "1px dashed black", margin: "10px 0" }} />

            <div className="similarFilms">
                <h2>Похожие фильмы:</h2>
                {similarFilms.length > 0 ? (
                    similarFilms.map(similarfilm => (
                        <h2 key={similarfilm.id}>
                            <Link to={`/films/${similarfilm.id}`} state={{ films }}>
                                {similarfilm.Title}
                            </Link>
                        </h2>
                    ))
                ) : (
                    <p>Похожие фильмы не найдены</p>
                )}
            </div>

            <hr style={{ border: "1px dashed black", margin: "10px 0" }} />
            <CommentBlock films={films} filmId={film.id} />
        </div>
    );
};

export default AboutFilm;
