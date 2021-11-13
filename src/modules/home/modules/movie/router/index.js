const Movie = () => import('./../views/Movie.vue');

export default [
  {
    path: 'movie/:id',
    component: Movie,
    meta: { requiresAuth: true },
    props: true,
  },
];
