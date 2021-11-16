<template>
  <v-app dark>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
/*
  TODO: WHEN USER RATE A MOVIE, 
  RECOMMENDED PAGE AND RATED PAGE NEEDS REFRESH TO UPDATE ITENS 
*/
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions(['setUser']),
  },
  created() {
    this.setUser();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Roboto', sans-serif;
}
</style>
