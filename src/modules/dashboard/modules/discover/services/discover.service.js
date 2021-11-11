import apollo from '@/plugins/apollo';

import GenreQuery from './../graphql/Genre.gql';

const getMoviesByGenre = async (variables) => {
  const response = await apollo.query({
    query: GenreQuery,
    variables: {
      first: 6,
      ...variables,
    },
  });

  return response.data.Genre;
};

export default {
  getMoviesByGenre,
};
