<template>
  <GroupMovieList
    :groupMovieList="genres"
    listTitleKey="name"
    movieListKey="movies"
  />
</template>

<script>
import { mapActions } from 'vuex';

import GroupMovieList from '@/modules/home/components/GroupMovieList.vue';

import DiscoverService from './../services/discover.service';

export default {
  name: 'Discover',
  components: {
    GroupMovieList,
  },
  data: () => ({
    genres: [],
  }),
  async created() {
    this.genres = await DiscoverService.getMoviesByGenre({
      userId: this.$store.state.user.userId,
    });
    this.setTitle({ title: 'Discover new Movies' });
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
