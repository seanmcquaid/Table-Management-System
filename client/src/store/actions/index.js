const actions = {
  loadingAction: ({ commit }) => {
    commit('loading');
  },
  stopLoadingAction: ({ commit }) => {
    commit('stopLoading');
  },
};

export default actions;
