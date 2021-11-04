export const namespaced = true;

export default {
  namespaced: true,

  //Valores que serão utilizados globalmente
  state: {
    favorites: [],
  },

  //Funções que farão atualização nos valores dos states
  mutations: {
    LOAD_SAVED_FAVORITES(state) {
      const savedFavorites =
        JSON.parse(localStorage.getItem('@BeerList:Favorites')) || [];

      if (savedFavorites.length) {
        state.favorites = savedFavorites;
      }
    },
    ADD_FAVORITE(state, beer) {
      state.favorites.push(beer);
    },
    REMOVE_FAVORITE(state, beer) {
      state.favorites = state.favorites.filter(
        (favorite_beer) => favorite_beer.id !== beer.id
      );
    },
  },

  //Funções que serão utilizadas globalmente (para chamar uma mutation ou não)
  actions: {
    saveInLocalStorage({ state }) {
      localStorage.setItem(
        '@BeerList:Favorites',
        JSON.stringify(state.favorites)
      );
    },
    loadFavorites({ commit }) {
      commit('LOAD_SAVED_FAVORITES');
    },
    addFavorite({ commit, dispatch }, beer) {
      commit('ADD_FAVORITE', beer);
      dispatch('saveInLocalStorage');
    },
    removeFavorite({ commit, dispatch }, beer) {
      commit('REMOVE_FAVORITE', beer);
      dispatch('saveInLocalStorage');
    },
    isFavoriteBeer({ state }, id) {
      const foundBeer = state.favorites.find((fav_beer) => id === fav_beer.id);

      return !!foundBeer;
    },
  },
};
