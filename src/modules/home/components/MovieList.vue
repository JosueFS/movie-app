<template>
  <v-row>
    <v-col cols="12" class="text-h4 font-weight-bold">Similar Movies</v-col>

    <template>
      <v-col
        cols="12"
        sm="4"
        lg="3"
        xl="2"
        v-for="movie in movieList"
        :key="`${movie.movieId}`"
      >
        <MovieCard :movie="movie" />
      </v-col>
    </template>
  </v-row>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
  name: 'MovieList',
  props: {
    movieList: Array,
  },
  components: {
    MovieCard,
  },
};

// displayflex
// flex-basisauto
// flex-grow1
// flex-shrink1
// flex-wrapwrap
</script>
