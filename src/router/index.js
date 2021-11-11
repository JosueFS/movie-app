import Vue from 'vue';
import VueRouter from 'vue-router';

import { AUTH_CREDENTIALS } from '@/plugins/apollo';

import AuthService from '@/modules/auth/services/auth.service';

import authRoutes from '@/modules/auth/router';
import dashboardRoutes from '@/modules/dashboard/router';

Vue.use(VueRouter);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
/* webpackChunkName: "about" */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...authRoutes, ...dashboardRoutes, { path: '', redirect: '/login' }],
});

router.beforeEach(async (to, from, next) => {
  const user = JSON.parse(window.localStorage.getItem(AUTH_CREDENTIALS));

  const loginRoute = {
    path: '/login',
    query: {
      redirect: to.fullPath,
    },
  };

  if (to.matched.some((route) => route.path === '/login') && user) {
    try {
      await AuthService.getUser(user.name, {
        fetchPolicy: 'network-only',
      });

      return next({
        path: '/dashboard',
      });
    } catch (error) {
      console.log('Auto login error: ', error);
      return next(loginRoute);
    }
  }

  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (user) {
      try {
        await AuthService.getUser(user.name, {
          fetchPolicy: 'network-only',
        });

        return next();
      } catch (error) {
        console.log('Auto login error: ', error);
        return next(loginRoute);
      }
    }

    return next(loginRoute);
  }

  next();
});

export default router;
