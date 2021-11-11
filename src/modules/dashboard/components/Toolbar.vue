<template>
  <v-app-bar app fixed color="primary">
    <v-app-bar-nav-icon @click.stop="$emit('hide', !show)"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title || 'Dashboard' }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title class="d-none d-sm-block">
      <span class="title text-h5 mt-1">MOVUE</span>
      <span class="text-subtitle-2">Movie Reccomendations</span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Toolbar',
  props: {
    show: Boolean,
  },
  model: {
    prop: 'show',
    event: 'hide',
  },
  computed: {
    ...mapState(['title']),
  },
};
</script>

<style lang="scss" scope>
div.v-toolbar__title > span.title {
  display: block;
  color: #fff;
  font-family: 'Kanit', sans-serif !important;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
}

span.text-subtitle-2 {
  color: #ddd;
}
</style>
