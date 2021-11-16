import discoverRoutes from './../modules/discover/router';
import movieRoutes from './../modules/movie/router';
import userRoutes from './../modules/user/router';
import recommendedRoutes from './../modules/recommended/router';
import ratedRoutes from './../modules/rated/router';

const Home = () => import('./../views/Home.vue');

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
    children: [
      ...discoverRoutes,
      ...movieRoutes,
      ...ratedRoutes,
      ...recommendedRoutes,
      ...userRoutes,
    ],
  },
];
