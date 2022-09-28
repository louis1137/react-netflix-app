import api from '../api'

// const API_KEY = '77a14aeaae3050b3cf8d47afc0690125';
const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies (){
	return async (dispatch)=>{
		const getPopularMovieApi = await api.get(`popular?api_key=${API_KEY}&language=en-US&page=1`);
		// const getTopRatedMovieApi = await api.get(`top_rated?api_key=${API_KEY}&language=en-US&page=1`);
		// const getIpComingMovieApi = await api.get(`upcoming?api_key=${API_KEY}&language=en-US&page=1`);

		// let movieData = await Promise.all([getPopularMovieApi, getTopRatedMovieApi, getIpComingMovieApi]);

		console.log(getPopularMovieApi)

		// const host = 'https://api.themoviedb.org/3/movie/'
		// let url1 = 'popular?api_key=<<api_key>>&language=en-US&page=1';
		// let response1 = await fetch(url);
		// let data1 = await response.json();

		// let url2 = 'top_rated?api_key=<<api_key>>&language=en-US&page=1';
		// let response2 = await fetch(url);
		// let data2 = await response.json();

		// let url3 = 'upcoming?api_key=<<api_key>>&language=en-US&page=1';
		// let response3 = await fetch(url);
		// let data3 = await response.json();
		
	}
}

export const movieAction = {
	getMovies, 
}