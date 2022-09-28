import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import Headers from './components/Header'

function App() {
	return (
		<div className="App">
			<Headers/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/movies" element={<Movies/>}/>
				<Route path="/movies/:id" element={<MovieDetail/>}/>
			</Routes>
		</div>
	)
}

export default App
