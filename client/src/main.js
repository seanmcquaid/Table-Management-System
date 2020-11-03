import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { apolloClient } from './apollo';

createApp(App)
  .use(store)
  .provide(DefaultApolloClient, apolloClient)
  .use(router)
  .mount('#app');
