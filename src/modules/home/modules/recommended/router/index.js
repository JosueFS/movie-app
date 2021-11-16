const Recommended = () => import('./../views/Recommended.vue');

export default [
  {
    path: 'recommended',
    component: Recommended,
    meta: { requiresAuth: true },
    alias: ['/home'],
  },
];
