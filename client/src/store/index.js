import { createStore } from 'vuex';
import auth from './modules/auth';
import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default createStore({
  actions,
  getters,
  mutations,
  state,
  modules: {
    auth,
  },
});
