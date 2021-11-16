const Rated = () => import('./../views/Rated.vue');

export default [
  {
    path: 'rated',
    component: Rated,
    meta: { requiresAuth: true },
  },
];
