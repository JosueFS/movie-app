import api from '@/services/api.js';

export default {
  namespaced: true,

  state: {
    beers: [],
  },
  mutations: {
    UPDATE_BEER_LIST(state, beerList) {
      state.beers = beerList;
    },
  },
  actions: {
    async getBeers({ commit }, queryString, page, perPage) {
      try {
        const { data: beerList } = await api.getBeerList(
          queryString,
          page,
          perPage
        );

        commit('UPDATE_BEER_LIST', beerList);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
