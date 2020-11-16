import TableConfigurations from '../views/TableConfigurations/TableConfigurations.vue';
import TableManagement from '../views/TableManagement/TableManagement.vue';
import EditTable from '../views/EditTable/EditTable.vue';
import CurrentTables from '../views/CurrentTables/CurrentTables.vue';
import Profile from '../views/Profile/Profile.vue';
import store from '../store';

export const isAuthenticated = (to, from, next) => {
  if (
    !store.state.isLoading &&
    store.state.auth.isAuthenticated &&
    !store.state.auth.errorMessage
  ) {
    next();
  } else {
    next({
      name: 'Home',
    });
  }
};

const protectedRoutes = [
  {
    path: '/tableManagement',
    name: 'TableManagement',
    component: TableManagement,
    beforeEnter: isAuthenticated,
  },
  {
    path: '/currentTables',
    name: 'CurrentTables',
    component: CurrentTables,
    beforeEnter: isAuthenticated,
  },
  {
    path: '/tableConfigurations',
    name: 'TableConfigurations',
    component: TableConfigurations,
    beforeEnter: isAuthenticated,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: isAuthenticated,
  },
  {
    path: '/editTable/:id',
    name: 'EditTable',
    component: EditTable,
    beforeEnter: isAuthenticated,
  },
];
export default protectedRoutes;
