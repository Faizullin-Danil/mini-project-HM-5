import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage.jsx"
import AboutFilm from "./pages/AboutFilm/AboutFilm.jsx"
import SearchFilm from "./pages/SearchFilms/SearchFilms.jsx"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainPage/>} path="/"/>
                <Route element={<AboutFilm/>} path="/films/:id"/>
                <Route element={<SearchFilm/>} path="/searchfilm"/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router