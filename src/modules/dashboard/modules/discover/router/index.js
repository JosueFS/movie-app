const Discover = () => import('./../views/Discover.vue');

export default [
  {
    path: 'discover',
    component: Discover,
    meta: { requiresAuth: true },
    alias: [''],
  },
];
