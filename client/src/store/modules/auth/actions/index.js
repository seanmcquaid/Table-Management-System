import * as userService from '../../../../api/userService';

const authActions = {
  getUserInfoAction: ({ commit }) => {
    commit('startLoading');

    return userService
      .getUserInfo()
      .then(({ data }) => {})
      .catch(({ graphQLErrors }) => {
        return commit('setErrorMessage', {
          errorMessage:
            graphQLErrors[0].message ??
            'There was a problem logging in, please try again!',
        });
      })
      .finally(() => {
        return commit('stopLoading');
      });
  },
  loginAction: ({ commit }, { username, password }) => {
    commit('startLoading');

    return userService
      .login(username, password)
      .then(({ data }) => {
        const { login } = data;
        return commit('loginSuccess', { token: login });
      })
      .catch(({ graphQLErrors }) => {
        return commit('setErrorMessage', {
          errorMessage:
            graphQLErrors[0].message ??
            'There was a problem logging in, please try again!',
        });
      })
      .finally(() => {
        return commit('stopLoading');
      });
  },
  registerAction: ({ commit }, { username, password }) => {
    commit('startLoading');

    return userService
      .register(username, password)
      .then(({ data }) => {
        const { register } = data;
        commit('registerSuccess', { token: register });
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
};

export default authActions;
