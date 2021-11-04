import Vue from 'vue';
import Vuex from 'vuex';

import beerModule from '@/store/modules/beer.js';
import favoriteModule from '@/store/modules/favorite.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    beerModule,
    favoriteModule,
  },
  state: {
    username: null,
    queryString: undefined,
  },
  mutations: {
    SET_PAGE(state, newPage) {
      state.page = newPage;
    },
    SET_QUERY_STRING(state, query) {
      state.queryString = query;
    },
  },
  actions: {
    handleSetPage({ commit }, newPage) {
      commit('SET_PAGE', newPage);
    },
    handleSetQueryString({ commit }, query) {
      commit('SET_QUERY_STRING', query);
    },
  },
});
