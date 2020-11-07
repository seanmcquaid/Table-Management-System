import * as userService from '../../../../api/userService';

const authActions = {
  loginAction: ({ commit }, payload) => {
    commit('loading');

    const { username, password } = payload;
    userService
      .login(username, password)
      .then(({ data }) => {
        commit('loginSuccess', data);
      })
      .catch(({ graphQLErrors }) => {
        commit('loginError', graphQLErrors);
      });
  },
};

export default authActions;
