<template>
  <v-container class="pa-0">
    <v-img
      :class="{
        'ma-0': $vuetify.breakpoint.xs,
        'ma-0': $vuetify.breakpoint.smAndUp,
      }"
      :max-height="$vuetify.breakpoint.xs ? '900px' : '540px'"
      v-if="!!movie.bg_url"
      :src="movie.bg_url"
      gradient="90deg, rgba(18,18,18,1) 10%, rgba(18,18,18,0.7) 50%"
    >
      <v-row align="center" class="fill-height justify-center justify-sm-start">
        <v-col
          class="
            pa-1
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
            color="secondary"
            min-width="200px"
            max-width="300px"
          >
            <v-img
              class="d-block d-sm-none rounded"
              width="240px"
              contain
              position="center top"
              :src="movie.poster"
            ></v-img>
            <v-img
              contain
              class="d-none d-sm-block rounded"
              position="center top"
              max-width="300px"
              :src="movie.poster"
            ></v-img>
            <p class="caption text-center pa-0 ma-0">{{ formatedDate }}</p>
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
                class="white--text text-h4 font-weight-bold ml-4 py-0 multiline"
              >
                {{ movie.title }}
              </p>
            </v-card-text>

            <v-card-text class="white--text py-0">
              <div class="ml-1 px-2">
                <div class="mx-1">
                  <v-chip tag outlined>{{ formatedReleasedDate }}</v-chip>
                  <p class="body-2 mt-3">
                    {{ movie.in_genre.map((g) => g.name).join(', ') }}
                  </p>
                </div>
              </div>

              <v-list-item two-line class="ml-0">
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1 font-weight-bold">
                    Sinopse
                  </v-list-item-title>
                  <p class="multiline">
                    {{ movie.plot }}
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>

            <v-card-actions
              class="btn-group py-0 justify-center justify-sm-start mb-4"
              :class="{
                'ma-0': $vuetify.breakpoint.xs,
                'ma-6': $vuetify.breakpoint.smAndUp,
              }"
            >
              <v-btn
                class="d-flex justify-space-around mr-2"
                @click.stop="dialog = true"
                small
              >
                <v-icon size="20">mdi-star-outline</v-icon>
                Rate
              </v-btn>
              <v-dialog
                transition="dialog-bottom-transition"
                max-width="400"
                v-model="dialog"
                persistent
              >
                <template>
                  <v-card>
                    <v-toolbar color="primary" class="text-center" dark
                      >Rate this Movie</v-toolbar
                    >
                    <v-card-text>
                      <div class="text-subtitle-1 pa-1 text-center">
                        Choose Rating
                      </div>
                    </v-card-text>

                    <v-rating
                      class="d-flex justify-center column mb-3"
                      dense
                      empty-icon="mdi-star-outline"
                      full-icon="mdi-star"
                      half-icon="mdi-star-half-full"
                      half-increments
                      hover
                      length="5"
                      size="32"
                      v-model="rating"
                    ></v-rating>

                    <v-card-text class="pb-0">
                      <div class="caption pa-1 text-center">
                        {{ formatedRatedAtDate }}
                      </div>
                    </v-card-text>

                    <v-card-actions class="justify-center">
                      <v-btn text @click="handleGiveUpRate">Cancel</v-btn>
                      <v-btn text @click="handleRateMovie">Ok</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>

              <v-btn
                small
                @click="isSaved = !isSaved"
                class="d-flex justify-space-around border-none"
              >
                <template v-if="isSaved">
                  <v-icon size="20">mdi-playlist-minus </v-icon>
                  Remove
                </template>

                <template v-else>
                  <v-icon size="20">mdi-playlist-plus</v-icon>
                  Save
                </template>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <div class="related"></div>
      </v-row>
    </v-img>

    <MovieList :movieList="movie.similarMovies" listTitle="Similar Movies" />
  </v-container>
</template>

<script>
//FIXME: SIMILAR MOVIES NOT SHOWING !!!!
import moment from 'moment';

import MovieService from './../services/movie.service';

import MovieList from '@/modules/home/components/MovieList.vue';

export default {
  name: 'Movie',
  components: {
    MovieList,
  },
  data: () => ({
    movie: {},
    formatedRatedAtDate: '',
    rating: 0,
    dialog: false,
    isSaved: false,
  }),
  computed: {
    formatedDate() {
      return moment(this.movie.released)
        .format('DD/MM/YYYY')
        .replaceAll('-', '/');
    },
    formatedReleasedDate() {
      return moment()
        .startOf('day')
        .add(this.movie.runtime, 'minutes')
        .format('h[h] mm[min]');
    },
    // formatedRatedAtDate() {
    //   const date =
    //     moment
    //       .unix(this.movie.users_ratings[0]?.timestamp)
    //       .format('DD/MM/YYYY HH:mm:ss') || '';

    //   return date === 'Invalid date' ? '' : date;
    // },
  },
  methods: {
    async handleRateMovie() {
      const ratings = await MovieService.rateMovie({
        userId: this.$store.state.user.userId,
        movieId: this.movie.movieId,
        rating: this.rating,
        timestamp: moment().unix(),
      });

      this.movie.users_ratings[0] = {
        ...this.movie.users_ratings[0],
        ...ratings,
      };

      this.updateRatedAt();

      this.dialog = false;
    },
    updateRatedAt() {
      let date = moment
        .unix(this.movie.users_ratings[0]?.timestamp)
        .format('DD/MM/YYYY HH:mm:ss');

      date = date === 'Invalid date' ? '' : date;

      this.formatedRatedAtDate = date;

      this.rating = this.movie.users_ratings[0]?.rating;
    },
    handleGiveUpRate() {
      this.dialog = false;
      this.rating = this.movie.users_ratings[0]?.rating || 0;
    },
  },
  async created() {
    const { id } = this.$route.params;

    this.movie = await MovieService.getMovieDetails({
      movieId: id,
      userId: this.$store.state.user.userId,
    });

    this.updateRatedAt();
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
  width: 50px;
  height: 50px;
  top: 8px;
  right: 8px;
  border: 0;
  outline: 0;
  border-radius: 50%;

  &:hover {
    background: #fee7f2;
  }
}
</style>
