<template>
  <v-hover>
    <v-card
      class="event-card white--text"
      :style="backgroundStyle"
      pointer
      @click="navigateToMovieDetails"
    >
      <div>
        <v-rating
          v-if="movie.users_ratings && movie.users_ratings.length"
          full-icon="mdi-star"
          half-icon="mdi-star-half-full"
          background-color="orange lighten-3"
          color="orange"
          half-increments
          readonly
          length="5"
          size="24"
          :value="movie.users_ratings[0].rating"
        ></v-rating>
      </div>

      <div>
        <div>
          <h4 class="title ma-1">{{ movie.title }}</h4>
        </div>

        <!-- <v-chip-group>
        <v-chip
          color="white"
          outlined
          v-for="genre in movie.in_genre"
          :key="`${movie.movieId}-${genre._id}`"
        >
          {{ genre.name }}
        </v-chip>
      </v-chip-group> -->

        <v-chip-group class="d-flex align-center">
          <v-chip v-if="movie.imdbRating" outlined color="amber">
            IMDb {{ movie.imdbRating }}
          </v-chip>

          <!-- <v-chip outlined color="#FF1744">
            User {{ movie.imdbRating }}
          </v-chip> -->
        </v-chip-group>

        <v-footer color="transparent" class="white--text justify-center">
          <strong>{{ movie.year }}</strong>
        </v-footer>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  data() {
    return {
      isFavorite: false,
      backgroundStyle: {
        background: `linear-gradient(rgba(6,0,25, 0.4) 50%,rgba(6,0,25, 0.95) 97%),url("${this.movie.poster}")`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
    };
  },

  methods: {
    navigateToMovieDetails() {
      this.$router.push({
        path: `/home/movie/${this.movie.movieId}`,
      });
    },
  },
};
</script>

<style lang="scss">
.event-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 400px;
  border-radius: 4px;
  margin-bottom: 24px;
  color: #fff;
  text-align: center;
  transition: all 0.4s linear;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);

  div.v-slide-group__content {
    justify-content: center;
  }

  &:hover {
    box-shadow: 0 3px 12px 0 rgba(119, 0, 255, 0.3),
      0 1px 15px 0 rgba(119, 0, 255, 0.19) !important;
  }
}
</style>
