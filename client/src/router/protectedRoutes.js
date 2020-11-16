import TableConfigurations from '../views/TableConfigurations/TableConfigurations.vue';
import TableManagement from '../views/TableManagement/TableManagement.vue';
import EditTable from '../views/EditTable/EditTable.vue';
import CurrentTables from '../views/CurrentTables/CurrentTables.vue';
import Profile from '../views/Profile/Profile.vue';

const protectedRoutes = [
  {
    path: '/tableManagement',
    name: 'TableManagement',
    component: TableManagement,
  },
  {
    path: '/currentTables',
    name: 'CurrentTables',
    component: CurrentTables,
  },
  {
    path: '/tableConfigurations',
    name: 'TableConfigurations',
    component: TableConfigurations,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/editTable/:id',
    name: 'EditTable',
    component: EditTable,
  },
];
export default protectedRoutes;
