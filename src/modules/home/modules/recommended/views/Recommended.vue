<template>
  <v-container>
    <GroupMovieList
      :groupMovieList="movies"
      movieListKey="similarMovies"
      listTitleKey="title"
      listTitle="Recommended Movies"
    />
  </v-container>
</template>

<script>
//TODO: ADD Tips to see Discover Page when not have movies to recommend
import RecommendationService from './../services/recommended.service';

import GroupMovieList from '@/modules/home/components/GroupMovieList.vue';

export default {
  name: 'Recommendations',
  components: {
    GroupMovieList,
  },
  data: () => ({
    movies: [],
  }),
  async beforeCreate() {
    this.movies = await RecommendationService.getRecommendedMovies({
      userId: this.$store.state.user.userId,
    });
  },
};
</script>

<style></style>
