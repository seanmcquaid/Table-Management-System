import TableConfigurations from '../views/TableConfigurations/TableConfigurations.vue';
import TableManagement from '../views/TableManagement/TableManagement.vue';
import EditTable from '../views/EditTable/EditTable.vue';
import CurrentTables from '../views/CurrentTables/CurrentTables.vue';
import Profile from '../views/Profile/Profile.vue';

const protectedRoutes = [
  {
    path: '/tableManagement',
    name: 'tableManagement',
    component: TableManagement,
  },
  {
    path: '/currentTables',
    name: 'currentTables',
    component: CurrentTables,
  },
  {
    path: '/tableConfigurations',
    name: 'tableConfigurations',
    component: TableConfigurations,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/editTable/:id',
    name: 'editTable',
    component: EditTable,
  },
];
export default protectedRoutes;
