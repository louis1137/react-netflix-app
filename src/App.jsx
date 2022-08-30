import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/movies" element={<Movies/>}></Route>
				<Route path="/movies/:id" element={<MovieDetail/>}></Route>
			</Routes>
		</div>
	)
}

export default App
