<template>
  <v-app app>
    <NavBar />
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
  // created() {
  //   this.$store.dispatch('favoriteModule/loadFavorites');
  // },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  justify-content: center;
}

main.v-main {
  padding-left: 16px !important;
  padding-right: 16px !important;
  background: #060019dd;
}

div {
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
select {
  text-transform: none;
}

header,
footer {
  background: #060019 !important;
}
</style>
