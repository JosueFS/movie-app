import apollo from '@/plugins/apollo';

import RecommendationsQuery from './../graphql/Recommendations.gql';

const getRecommendedMovies = async (variables) => {
  const response = await apollo.query({
    query: RecommendationsQuery,
    variables: {
      first: 6,
      ...variables,
    },
  });

  const ratedList = response.data.User[0].RATED_rel;

  const finalRatedList = ratedList.map((list) => list.Movie);

  return finalRatedList;
};

export default {
  getRecommendedMovies,
};
