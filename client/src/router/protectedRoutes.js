import AddTableConfiguration from '../views/AddTableConfiguration/AddTableConfiguration.vue';
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
    path: '/addTableConfiguration',
    name: 'AddTableConfiguration',
    component: AddTableConfiguration,
  },
];
export default protectedRoutes;
