<template>
  <v-row>
    <template v-for="genre in genres">
      <v-col :key="genre._id" cols="12" class="text-h4 font-weight-bold">{{
        genre.name
      }}</v-col>
      <template>
        <v-col
          v-for="movie in genre.movies"
          :key="`${genre._id}-${movie.movieId}`"
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
import { mapActions, mapState } from 'vuex';

import MovieCard from './../components/MovieCard.vue';

import DiscoverService from './../services/discover.service';

export default {
  name: 'Discover',
  components: {
    MovieCard,
  },
  data: () => ({
    genres: [],
  }),
  computed: mapState({
    // favorites: (state) => state.favoriteModule.favorites,
  }),
  async created() {
    this.genres = await DiscoverService.getMoviesByGenre();
    this.setTitle({ title: 'Filmes Recomendados' });
  },
  methods: {
    ...mapActions(['setTitle']),
  },
};
</script>

<style lang="scss" scoped>
/* div.responsive-cards {
  gap: 8px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
} */
</style>
