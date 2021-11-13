import api from '@/services/api';
import apollo from '@/plugins/apollo';

import MovieQuery from './../graphql/Movie.gql';
import RatingMutation from './../graphql/Rating.gql';

const getMovieDetails = async (variables) => {
  const response = await apollo.query({
    query: MovieQuery,
    variables,
  });

  const Movie = response.data.Movie[0];

  const { data } = await api.getMovieImages(Movie.tmdbId);

  const imageObj = data.backdrops[0] || data.posters[0];

  Movie.bg_url = `https://image.tmdb.org/t/p/original${imageObj.file_path}`;

  return Movie;
};

const rateMovie = async (variables) => {
  const response = await apollo.mutate({
    mutation: RatingMutation,
    variables,
  });

  return response.data.MergeUserRATED_rel;
};

export default {
  getMovieDetails,
  rateMovie,
};
