import Vue from 'vue';
import Vuex from 'vuex';

// import api from '@/services/api';
// import MovieService from '@/modules/dashboard/modules/movie/services/movie.service';

import { AUTH_CREDENTIALS } from '@/plugins/apollo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: undefined,
    user: JSON.parse(window.localStorage.getItem(AUTH_CREDENTIALS)),
    // movieDetail: {},
  },
  mutations: {
    SET_TITLE: (state, { title }) => {
      state.title = title;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    // SET_MOVIE_BG_URL: (state, imageUrl) => {
    //   state.movieDetail.bg_url = imageUrl;
    // },
    // SET_MOVIE_DETAIL: (state, movie) => {
    //   state.movie = movie;
    // },
  },
  actions: {
    setTitle: ({ commit }, payload) => {
      commit('SET_TITLE', payload);
    },
    setUser: ({ commit }, payload) => {
      commit('SET_USER', payload);
    },
    // async setMovieBgUrl({ commit, dispatch, state }, payload) {
    //   try {
    //     await dispatch('setMovieDetails', payload.movieId);

    //     console.log(state);

    //     console.log(payload);
    //     const { data } = await api.getMovieImages(state.movieDetail.tmdbId);

    //     const imageObj = data.backdrops[0] || data.posters[0];

    //     const imgUrl = `https://image.tmdb.org/t/p/original${imageObj.file_path}`;

    //     commit('SET_MOVIE_BG_URL', imgUrl);

    //     return imgUrl;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async setMovieDetails({ commit }, movieId) {
    //   try {
    //     const movie = await MovieService.getMovieDetails({ movieId });

    //     commit('SET_MOVIE_DETAIL', movie);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
});
