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
      .catch(err => {
        console.log(err);
        // commit('loginError', err);
      });
  },
};

export default authActions;
