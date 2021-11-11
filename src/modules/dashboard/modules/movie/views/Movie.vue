<template>
  <v-container class="pa-0">
    <v-img
      max-height="550px"
      v-if="!!movie.bg_url"
      :src="movie.bg_url"
      gradient="90deg, rgba(18,18,18,1) 10%, rgba(18,18,18,0.7) 50%"
    >
      <v-row align="center" class="fill-height justify-center justify-sm-start">
        <v-col
          class="
            pa-0
            d-flex
            justify-center justify-sm-start
            flex-shrink-1 flex-grow-1 flex-sm-shrink-0 flex-sm-grow-0
          "
          xs12
          sm5
        >
          <v-card
            justify-self="center"
            class="ma-3"
            color="grey"
            min-width="300px"
            max-width="420px"
          >
            <v-img height="450px" :src="movie.poster"></v-img>
          </v-card>
        </v-col>
        <v-col
          class="py-0 flex-shrink-0 flex-grow-1 text-center text-sm-start"
          xs12
          sm7
        >
          <v-card color="rgba(0, 0, 0, 0)" flat dark>
            <v-card-text class="py-0">
              <p
                class="white--text text-h6 font-weight-bold ml-4 py-0 multiline"
              >
                {{ movie.title }}
              </p>
            </v-card-text>

            <v-card-text class="white--text py-0">
              <div class="px-2">
                <div class="mx-1">
                  <!-- <v-chip label outlined small color="white" class="ma-2 pa-1"
                    >14</v-chip> -->

                  <span>{{ movie.released }}</span>
                  <span>{{ movie.runtime }}</span>
                  <span v-for="genre in movie.in_genre" :key="genre._id">
                    {{ genre.name }}
                  </span>
                </div>

                <!-- <v-progress-circular
                  rotate="-90"
                  color="primary lighten-3 ma-2"
                  :value="84"
                  size="45"
                  width="3"
                >
                  <span class="text-subtitle-2 font-weight-bold">84%</span>
                </v-progress-circular>
                <span class="text-subtitle-1 font-weight-bold">
                  Avaliação dos usuários
                </span> -->

                <!-- <p class="font-italic pa-2">
                  With your blade, bring an end to the nightmare.
                </p> -->
              </div>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1 font-weight-bold">
                    Sinopse
                  </v-list-item-title>
                  <p class="multiline">
                    {{ movie.plot }}
                  </p>
                </v-list-item-content>
              </v-list-item>

              <!-- <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1 font-weight-bold">
                    Haruo Sotozaki
                  </v-list-item-title>
                  <p>Diretor</p>
                </v-list-item-content>
              </v-list-item> -->
            </v-card-text>

            <v-card-actions
              class="btn-group py-0 justify-center justify-sm-start mb-4"
            >
              <v-btn> Avaliar Filme </v-btn>
              <!-- 
              <FavIcon
                class="favorite-icon"
                @click.native="updFavorites"
                :isFavorite="isFavorite"
              /> -->

              <v-btn>Favoritos</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <div class="related"></div>
      </v-row>
    </v-img>
  </v-container>
</template>

<script>
import MovieService from './../services/movie.service';

export default {
  name: 'Movie',
  data: () => ({
    movie: {},
    isFavorite: false,
  }),
  async created() {
    const { id } = this.$route.params;

    this.movie = await MovieService.getMovieDetails({
      movieId: id,
    });
  },
};
</script>

<style lang="scss" scope>
.v-progress-circular {
  margin: 0.5rem;
}
div.v-list-item__title.text-h6.font-weight-bold.pl-8.multiline,
.multiline {
  overflow: visible;
  -webkit-line-clamp: unset;
}

.favorite-icon {
  /* position: absolute; */
  width: 50px;
  height: 50px;
  top: 8px;
  right: 8px;
  /* background: red; */
  border: 0;
  outline: 0;
  border-radius: 50%;

  &:hover {
    background: #fee7f2;
  }
}
</style>
