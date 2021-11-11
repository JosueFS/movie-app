import axios from 'axios';

// const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getMovieImages(movieId) {
    return api.get(
      `/movie/${movieId}/images?api_key=61a2a020dd3de41e469bc09fc266744f`
    );
  },
};
