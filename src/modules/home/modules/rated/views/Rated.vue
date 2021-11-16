<template>
  <v-container>
    <MovieList :movieList="movies" listTitle="Rated Movies" />
  </v-container>
</template>

<script>
import RatedService from './../services/rateds.service';

import MovieList from '@/modules/home/components/MovieList.vue';

export default {
  name: 'Rated',
  components: {
    MovieList,
  },
  data: () => ({
    movies: [],
  }),
  async beforeCreate() {
    this.movies = await RatedService.getRatedMovies({
      userId: this.$store.state.user.userId,
    });
  },
};
</script>

<style></style>
