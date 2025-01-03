import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage.jsx"
import AboutFilm from "./pages/AboutFilm/AboutFilm.jsx"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainPage/>} path="/"/>
                <Route element={<AboutFilm/>} path="/aboutfilm"/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router