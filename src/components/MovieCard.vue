<template>
  <!-- <div class="event-card -shadow">
    <img class="movie-image" :src="movie.image_url" :alt="movie.tagline" />
    <div class="title-box">
      <h4 class="title">{{ movie.name }}</h4>
    </div>
    <i class="tagline">{{ movie.tagline }} </i>
    <p class="multiline">{{ movie.description }}</p>

    <FavoriteIcon
      class="favorite-icon"
      @click.native="updFavorites"
      :isFavorite="isFavorite"
    />

    <div class="card-footer">
      <strong>{{ movie.first_brewed.slice(3) }}</strong>
    </div>
  </div> -->
  <div class="event-card -shadow mt-6" :style="backgroundStyle">
    <div class="title-box">
      <h4 class="title">Toy Story</h4>
    </div>

    <v-chip-group
      class="d-flex"
      active-class="deep-purple accent-4 white--text"
    >
      <v-chip>Infantil</v-chip>
      <v-chip>Aventura</v-chip>
      <v-chip>Ação</v-chip>
    </v-chip-group>

    <div class="card-footer">
      <strong>2000</strong>
    </div>
  </div>
</template>

<script>
// import FavoriteIcon from '@/components/FavoriteIcon.vue';

export default {
  props: {
    movie: Object,
  },
  components: {
    // FavoriteIcon,
  },
  data() {
    return {
      isFavorite: false,
      backgroundStyle: {
        background:
          "linear-gradient(rgba(6,0,25, 0.4) 50%,rgba(6,0,25, 0.95) 97%),url('https://image.tmdb.org/t/p/w440_and_h660_face/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
      bgImage:
        'url(https://image.tmdb.org/t/p/w440_and_h660_face/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg)',
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

  background: linear-gradient(
      rgba(41, 43, 52, 1),
      rgba(41, 43, 52, 0.3),
      rgba(41, 43, 52, 1)
    ),
    url('https://image.tmdb.org/t/p/w440_and_h660_face/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg');

  .image-wrapper {
    max-height: 80%;
  }

  .movie-image {
    height: 80%;
    width: 100%;
    border-radius: 4px 4px 0 0;
  }

  > .title-box {
    display: flex;
    justify-content: center;
    align-items: center;

    > h4.title {
      margin: 0;
    }
  }

  div.v-slide-group__content {
    justify-content: center;
  }

  &:hover {
    max-height: 700px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
      0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }

  .card-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
