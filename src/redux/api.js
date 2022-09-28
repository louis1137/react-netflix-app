import axios from 'axios';

const api = axios.create({
	baseURL : 'https://api.themoviedb.org/3/movie/',
	headers : {
		withCredentials : true,
		contentType : 'application/json',
	}
})

api.interceptors.request.use(function (config) {
	// console.log('request config', config)
	return config;
}, function (error) {
	// console.log('request error', error)
	return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
	console.log('response response', response)
	return response;
}, function (error) {
	console.log('response error', error)
	return Promise.reject(error);
});

export default api