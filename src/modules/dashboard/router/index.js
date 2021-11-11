import discoverRoutes from './../modules/discover/router';
import movieRoutes from './../modules/movie/router';

const Dashboard = () => import('./../views/Dashboard.vue');

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
    children: [...discoverRoutes, ...movieRoutes],
  },
];
