<template>
  <div class="responsive-cards">
    <div v-for="movie in [1, 2, 3, 4, 5]" :key="movie">
      <MovieCard></MovieCard>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MovieCard from '@/components/MovieCard.vue';

export default {
  components: {
    MovieCard,
  },

  computed: mapState({
    favorites: (state) => state.favoriteModule.favorites,
  }),
};
</script>

<style lang="scss" scoped>
div.responsive-cards {
  gap: 8px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
