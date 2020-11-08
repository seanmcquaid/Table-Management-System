import * as userService from '../../../../api/userService';

const authActions = {
  loginAction: ({ commit }, payload) => {
    commit('startLoading');

    const { username, password } = payload;
    return userService
      .login(username, password)
      .then(({ data }) => {
        commit('loginSuccess', data);
      })
      .catch(({ graphQLErrors }) => {
        commit('setErrorMessage', {
          errorMessage:
            graphQLErrors[0].message ??
            'There was a problem logging in, please try again!',
        });
      })
      .finally(() => {
        commit('stopLoading');
      });
  },
  registerAction: ({ commit }, payload) => {},
};

export default authActions;
