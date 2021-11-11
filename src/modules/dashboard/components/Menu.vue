<template>
  <v-navigation-drawer
    app
    :value="value"
    @input="$emit('input', $event)"
    :mini-variant="mini"
    class="mt-14 mt-md-16"
    fixed
    temporary
  >
    <v-list>
      <v-list-item v-if="mini" @click.stop="mini = !mini">
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>

      <v-list-item tag="div" @click.stop="">
        <v-list-item-action>
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-action class="caption username">{{
            user.name
          }}</v-list-item-action>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider light></v-divider>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.url"
        :exact="item.exact"
        @click.stop="$emit('input', false)"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Menu',
  props: {
    value: Boolean,
  },
  data: () => ({
    items: [
      {
        title: 'Recomendações',
        icon: 'mdi-filmstrip',
        url: '/dashboard',
        exact: true,
      },
      {
        title: 'Favoritos',
        icon: 'mdi-heart',
        url: '/dashboard/records/add?type=credit',
        exact: true,
      },
      {
        title: 'Avaliados',
        icon: 'mdi-star',
        url: '/dashboard/records/add?type=debit',
        exact: true,
      },
    ],
    mini: false,
  }),
  computed: {
    ...mapState(['user']),
  },
};
</script>

<style>
.v-application--is-ltr div.v-list-item__action:first-child {
  margin-right: 16px;
}
</style>
