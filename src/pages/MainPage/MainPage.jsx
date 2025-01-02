import { useState } from "react";
import Card from "../../components/Card/Card.jsx";
import MyButton from "../../components/MyButton/MyButton.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import "./MainPage.css";

const CollectionFilms = [
    { id: 1, Title: "Начало", Description: "Вор проникает в сны, чтобы украсть секреты.", Actors: "Леонардо ДиКаприо, Джозеф Гордон-Левитт", Сategory: "Научная фантастика", Rate: 3 },
    { id: 2, Title: "Побег из Шоушенка", Description: "Два человека находят дружбу в тюрьме.", Actors: "Тим Роббинс, Морган Фриман", Сategory: "Драма", Rate: 9 },
    { id: 3, Title: "Крестный отец", Description: "Сын наследует преступную империю отца.", Actors: "Марлон Брандо, Аль Пачино", Сategory: "Криминал", Rate: 7 },
    { id: 4, Title: "Темный рыцарь", Description: "Бэтмен против хаоса, который сеет Джокер.", Actors: "Кристиан Бейл, Хит Леджер", Сategory: "Фэнтези", Rate: 9 },
    { id: 5, Title: "Криминальное чтиво", Description: "Переплетенные истории о преступлении и искуплении.", Actors: "Джон Траволта, Ума Турман", Сategory: "Криминал", Rate: 9 },
    { id: 6, Title: "Форрест Гамп", Description: "Необычная жизнь человека на фоне истории.", Actors: "Том Хэнкс, Робин Райт", Сategory: "Драма", Rate: 8 },
    { id: 7, Title: "Бойцовский клуб", Description: "Бессонница приводит к созданию подпольного клуба.", Actors: "Брэд Питт, Эдвард Нортон", Сategory: "Драма", Rate: 6 },
    { id: 8, Title: "Матрица", Description: "Хакер открывает правду о реальности.", Actors: "Киану Ривз, Лоренс Фишберн", Сategory: "Научная фантастика", Rate: 8 },
    { id: 9, Title: "Властелин колец: Возвращение короля", Description: "Последняя битва за Средиземье начинается.", Actors: "Элайджа Вуд, Вигго Мортенсен", Сategory: "Фэнтези", Rate: 9 },
    { id: 10, Title: "Интерстеллар", Description: "Исследователи путешествуют через червоточину, чтобы спасти человечество.", Actors: "Мэттью МакКонахи, Энн Хэтэуэй", Сategory: "Научная фантастика", Rate: 10 }
];

const MainPage = () => {
    const [films, setFilms] = useState(CollectionFilms);
    const [favourites, setFavourites] = useState([]); 
    const [watchLater, setWatchLater] = useState([]); 

    const SortMax = () => {
        const sortedFilms = [...films].sort((a, b) => b.Rate - a.Rate);
        setFilms(sortedFilms);
    };

    const SortMin = () => {
        const sortedFilms = [...films].sort((a, b) => a.Rate - b.Rate);
        setFilms(sortedFilms);
    };

    const toggleFavourite = (id) => {
        setFavourites((prev) =>
            prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
        );
    };

    const toggleWatchLater = (id) => {
        setWatchLater((prev) =>
            prev.includes(id) ? prev.filter((watchId) => watchId !== id) : [...prev, id]
        );
    };

    return (
        <div>
            <div className="button">
                <MyButton onClick={SortMin} text={"По возрастанию рейтинга"} />
                <MyButton onClick={SortMax} text={"По убыванию рейтинга"} />
                <Dropdown films={films} setFilms={setFilms} />
            </div>
            {films.map((film) => (
                <Card
                    key={film.id}
                    props={film}
                    isFavourite={favourites.includes(film.id)}
                    isWatchLater={watchLater.includes(film.id)}
                    toggleFavourite={() => toggleFavourite(film.id)}
                    toggleWatchLater={() => toggleWatchLater(film.id)}
                />
            ))}
        </div>
    );
};

export default MainPage;