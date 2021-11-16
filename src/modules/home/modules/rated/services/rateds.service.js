import apollo from '@/plugins/apollo';

import RatedsQuery from './../graphql/Rateds.gql';

const getRatedMovies = async (variables) => {
  const response = await apollo.query({
    query: RatedsQuery,
    variables: {
      ...variables,
    },
  });

  const ratedMovies = response.data.User[0].RATED_rel.map(
    (movieArray) => movieArray.Movie
  );

  console.log(ratedMovies);

  return ratedMovies;
};

export default {
  getRatedMovies,
};
