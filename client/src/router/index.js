import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
// import protectedRoutes from './protectedRoutes';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
