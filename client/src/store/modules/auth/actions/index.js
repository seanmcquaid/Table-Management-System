import { apolloClient } from '../../../../apollo';
import { loginMutation } from '../../../../apollo/mutations';

const authActions = {
  loginAction: async ({ commit }, payload) => {
    commit('loading');
    console.log(payload);

    const { data, errors } = await apolloClient.mutate(loginMutation);

    if (errors) {
      return commit('loginError', errors);
    }

    return commit('loginSuccess', data);
  },
};

export default authActions;
