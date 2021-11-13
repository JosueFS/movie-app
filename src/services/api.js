import axios from 'axios';

const API_KEY = process.env.VUE_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

console.log(API_KEY);

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getMovieImages(movieId) {
    return api.get(`/movie/${movieId}/images?api_key=${API_KEY}`);
  },
};
