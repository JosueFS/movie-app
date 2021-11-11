<template>
  <div>
    <!-- <v-app-bar app>
      <router-link to="/" @click="clearQuery" class="brand">
        <v-toolbar-title class="title">MOVUE</v-toolbar-title>
        <span class="text-subtitle-2">Movie Reccomendations</span>
      </router-link>
      <v-spacer></v-spacer>

      <v-text-field
        label="Search"
        v-model.trim="query"
        class="mt-6"
        color="#333"
        background-color="#ddd"
        filled
        dense
        v-show="$route.path === ''"
      ></v-text-field>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" v-show="$route.path !== ''">
        <router-link
          exact
          v-for="item in menu"
          :key="item.title"
          @click="clearQuery"
          :to="{ name: item.name }"
          class="menu-btn"
        >
          <span class="title"> {{ item.title }}</span>
        </router-link>
      </v-toolbar-items>

      <v-app-bar-nav-icon
        @click="drawer = true"
        class="hidden-sm-and-up"
        v-show="$route.path !== ''"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            exact
            v-for="item in menu"
            :key="item.title"
            :to="{ name: item.name }"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { title: 'Home', name: '' },
        { title: 'Favorites', name: '' },
      ],
      drawer: false,
      query: '',
      timer: null,
    };
  },
  watch: {
    //Prevent multiple request to API when typing a query string
    // query(value) {
    //   clearInterval(this.timer);
    //   this.$store.dispatch('handleSetQueryString', value);
    //   this.timer = setTimeout(async () => {
    //     this.$router
    //       .push({
    //         query: { ...this.$route.query, queryString: value, page: 1 },
    //       })
    //       .catch(() => {});
    //     clearInterval(this.timer);
    //   }, 1000);
    // },
  },
  methods: {
    // clearQuery() {
    //   this.query = '';
    //   this.$router.push({ query: {} }).catch(() => {});
    // },
  },
};
</script>

<style lang="scss" scope>
a.brand {
  > div.v-toolbar__title.title {
    color: #fff;
    font-family: 'Kanit', sans-serif !important;
    font-weight: 700;
    line-height: 24px;
    text-align: center;

    + span.text-subtitle-2 {
      color: #ddd;
    }
  }
}

a.menu-btn {
  color: #fff !important;
  line-height: 56px;
}

div.v-toolbar__items {
  gap: 16px;
  font-weight: 400;
  margin-right: 16px;
}

aside.v-navigation-drawer {
  height: auto !important;
}

div.v-input {
  border-radius: 28px;

  div.v-input__slot {
    &:before,
    &:after {
      border: transparent !important;
    }

    div.v-text-field__slot {
      padding: 0 16px;

      & > label {
        left: 8px;
      }
    }
  }
}
</style>
