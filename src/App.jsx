import { Provider } from 'react-redux'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './Router.jsx'
import store from './store/store.js'
import SideBar from './components/SideBar/SideBar.jsx'

const CollectionFilms = [
  { id: 1, Title: "Начало", Description: "Вор проникает в сны, чтобы украсть секреты.", Actors: "Леонардо ДиКаприо, Джозеф Гордон-Левитт", Category: ["Научная фантастика", "Триллер"], Rate: 3 },
  { id: 2, Title: "Побег из Шоушенка", Description: "Два человека находят дружбу в тюрьме.", Actors: "Тим Роббинс, Морган Фриман", Category: ["Драма", "Криминал"], Rate: 9 },
  { id: 3, Title: "Крестный отец", Description: "Сын наследует преступную империю отца.", Actors: "Марлон Брандо, Аль Пачино", Category: ["Криминал", "Драма"], Rate: 7 },
  { id: 4, Title: "Темный рыцарь", Description: "Бэтмен против хаоса, который сеет Джокер.", Actors: "Кристиан Бейл, Хит Леджер", Category: ["Фэнтези", "Боевик", "Триллер"], Rate: 9 },
  { id: 5, Title: "Криминальное чтиво", Description: "Переплетенные истории о преступлении и искуплении.", Actors: "Джон Траволта, Ума Турман", Category: ["Криминал", "Драма"], Rate: 9 },
  { id: 6, Title: "Форрест Гамп", Description: "Необычная жизнь человека на фоне истории.", Actors: "Том Хэнкс, Робин Райт", Category: ["Драма", "Комедия"], Rate: 8 },
  { id: 7, Title: "Бойцовский клуб", Description: "Бессонница приводит к созданию подпольного клуба.", Actors: "Брэд Питт, Эдвард Нортон", Category: ["Драма", "Триллер", "Психологический"], Rate: 6 },
  { id: 8, Title: "Матрица", Description: "Хакер открывает правду о реальности.", Actors: "Киану Ривз, Лоренс Фишберн", Category: ["Научная фантастика", "Боевик"], Rate: 8 },
  { id: 9, Title: "Властелин колец: Возвращение короля", Description: "Последня битва за Средиземье начинается.", Actors: "Элайджа Вуд, Вигго Мортенсен", Category: ["Фэнтези", "Приключения"], Rate: 9 },
  { id: 10, Title: "Интерстеллар", Description: "Исследователи путешествуют через червоточину, чтобы спасти человечество.", Actors: "Мэттью МакКонахи, Энн Хэтэуэй", Category: ["Научная фантастика", "Драма"], Rate: 10 }
];

function App() {
  const [films, setFilms] = useState(CollectionFilms);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="SideBarAndMain">
          <div className="MainContent">
            <Router films={films} setFilms={setFilms} />
          </div>
          <div className="SideBar">
            <SideBar films={films} />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}



export default App
