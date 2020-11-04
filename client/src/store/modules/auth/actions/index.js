const authActions = {
  loginAction: ({ commit }, payload) => {
    commit('loading');
    console.log(payload);
  },
};

export default authActions;
