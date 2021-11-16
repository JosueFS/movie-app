<template>
  <v-row>
    <template v-for="group in groupMovieList">
      <v-col :key="group._id" cols="12" class="text-h4 font-weight-bold"
        >{{ movieListKey === 'similarMovies' ? 'Because you rated' : '' }}
        {{ group[listTitleKey] }}</v-col
      >

      <template>
        <v-col
          v-for="movie in group[movieListKey]"
          :key="`${group[listTitleKey]}-${movie.movieId}`"
          cols="12"
          sm="4"
          lg="3"
          xl="2"
        >
          <MovieCard :movie="movie" />
        </v-col>
      </template>
    </template>
  </v-row>
</template>

<script>
import MovieCard from '@/modules/home/components/MovieCard.vue';

export default {
  name: 'GroupMovieList',
  components: {
    MovieCard,
  },
  props: {
    groupMovieList: Array,
    movieListKey: String,
    listTitleKey: String,
  },
};
</script>
