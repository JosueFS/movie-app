<template>
  <v-container>
    <GroupMovieList
      :groupMovieList="movies"
      movieListKey="similarMovies"
      listTitleKey="title"
      listTitle="Recommended Movies"
    />

    <v-col class="mt-4 text-center" v-if="!movies || !movies.length">
      <v-icon size="96">mdi-emoticon-sad</v-icon>
      <h4>
        We still can't recommend any movies,
        <a href="/home/discover">go to movie discovery</a> and rate them.
      </h4>
      <p class="caption">
        Remembering that we will recommend movies based on ratings above 3
        stars.
      </p>
    </v-col>
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
  },
};
</script>

<style></style>
