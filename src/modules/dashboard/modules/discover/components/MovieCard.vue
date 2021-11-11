<template>
  <v-card class="event-card -shadow" :style="backgroundStyle">
    <FavoriteIcon @click.native="updFavorites" :isFavorite="isFavorite" />

    <div>
      <h4 class="title ma-1">{{ movie.title }}</h4>
    </div>

    <!-- <v-rating
      length="10"
      :value="movie.imdbRating"
      color="amber"
      background-color="grey darken-2"
      dense
      half-increments
      readonly
      size="14"
    ></v-rating> -->

    <!-- <span class="text-subtitle-1 font-weight-bold">
      Avaliação dos usuários
    </span> -->

    <v-chip-group class="d-flex align-center">
      <v-chip class="pa-1 ma-1" outlined color="amber">
        IMDb {{ movie.imdbRating }}
      </v-chip>
      <!-- <v-progress-circular
        rotate="-90"
        color="primary lighten-3 ma-2"
        :value="84"
        size="40"
        width="3"
      >
        <span class="text-subtitle-2">84%</span>
      </v-progress-circular> -->
    </v-chip-group>

    <v-chip-group>
      <v-chip
        outlined
        v-for="genre in movie.in_genre"
        :key="`${movie.movieId}-${genre._id}`"
      >
        {{ genre.name }}
      </v-chip>
    </v-chip-group>

    <v-footer color="transparent" class="card-footer">
      <strong>{{ movie.year }}</strong>
    </v-footer>
  </v-card>
</template>

<script>
import FavoriteIcon from './FavoriteIcon.vue';

export default {
  props: {
    movie: Object,
  },
  components: {
    FavoriteIcon,
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
    updFavorites() {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>

<style lang="scss">
.event-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
      0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }
}

.favorite-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 8px;
  right: 8px;
  background: transparent;
  border: 0;
  outline: 0;
  border-radius: 50%;

  &:hover {
    background: #fee7f2;
  }
}
</style>
