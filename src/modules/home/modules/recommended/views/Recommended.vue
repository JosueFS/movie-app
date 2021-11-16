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

    console.log(this.movies);
  },
};
</script>

<style></style>
