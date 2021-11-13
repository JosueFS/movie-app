import Vue from 'vue';
import Vuex from 'vuex';

import { AUTH_CREDENTIALS } from '@/plugins/apollo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: undefined,
    user: JSON.parse(window.localStorage.getItem(AUTH_CREDENTIALS)),
  },
  mutations: {
    SET_TITLE: (state, { title }) => {
      state.title = title;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    setTitle: ({ commit }, payload) => {
      commit('SET_TITLE', payload);
    },
    setUser: ({ commit }, payload = {}) => {
      const user =
        payload.name ||
        JSON.parse(window.localStorage.getItem(AUTH_CREDENTIALS));

      commit('SET_USER', user);
    },
  },
});
