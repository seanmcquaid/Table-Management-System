import TableConfigurations from '../views/TableConfigurations/TableConfigurations.vue';
import TableManagement from '../views/TableManagement/TableManagement.vue';
// import store from '../store';

// export const isAuthenticated = (to, from, next) => {};

const protectedRoutes = [
  // {
  //   path: '/example',
  //   name: '',
  //   component: '',
  //   beforeEnter: isAuthenticated,
  // },
  {
    path: '/tableManagement',
    name: 'TableManagement',
    component: TableManagement,
  },
  {
    path: '/tableConfigurations',
    name: 'TableConfigurations',
    component: TableConfigurations,
  },
];
export default protectedRoutes;
