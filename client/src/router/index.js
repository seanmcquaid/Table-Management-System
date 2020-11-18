import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Login from '../views/Login/Login.vue';
import Register from '../views/Register/Register.vue';
import protectedRoutes from './protectedRoutes';
// import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  ...protectedRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// need to revisit this later
// router.beforeEach((to, from, next) => {
//   const isProtectedRoute =
//     from.path !== '/home' &&
//     from.path !== '/login' &&
//     from.path !== '/register';
//   const isAuthenticatedAfterLoadingWithNoError =
//     !store.state.isLoading &&
//     store.state.auth.isAuthenticated &&
//     !store.state.auth.errorMessage;
//   if (isProtectedRoute && isAuthenticatedAfterLoadingWithNoError) {
//     next();
//   } else if (!isProtectedRoute) {
//     next();
//   } else {
//     next('/');
//   }
// });

export default router;
