import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Movie from '../views/Movie.vue';

Vue.use(VueRouter);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
/* webpackChunkName: "about" */
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/movie:id',
      name: 'movie',
      component: Movie,
      props: true,
    },
  ],
});
