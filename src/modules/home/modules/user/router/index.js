const User = () => import('./../views/User.vue');

export default [
  {
    path: 'user',
    component: User,
    meta: { requiresAuth: true },
  },
];
