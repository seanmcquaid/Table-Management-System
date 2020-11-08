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
        commit('error', {
          errorMessage:
            graphQLErrors[0].message ??
            'There was a problem logging in, please try again!',
        });
      });
  },
  registerAction: ({ commit }, payload) => {},
};

export default authActions;
