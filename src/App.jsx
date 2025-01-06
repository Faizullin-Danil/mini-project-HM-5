import { Provider } from 'react-redux'
import './App.css'
import MainPage from './pages/MainPage/MainPage.jsx'
import Router from './Router.jsx'
import store from './store/store.js'

function App() {
  return (
    <Provider store={store}>
      <Router/>   
    </Provider>
       
  )
}

export default App
