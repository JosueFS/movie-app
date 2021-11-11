<template>
  <div max-height="85vh">
    <Toolbar v-model="drawer" />
    <Menu v-model="drawer" />

    <v-container grid-list-md>
      <v-row>
        <v-col xs12 class="pt-0">
          <slot />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Menu from './Menu.vue';
import Toolbar from './Toolbar.vue';

export default {
  name: 'Layout',
  components: {
    Menu,
    Toolbar,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>

<style></style>
