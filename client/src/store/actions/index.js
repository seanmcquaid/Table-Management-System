const actions = {
  loadingAction: ({ commit }) => {
    commit('loading');
  },
  stopLoadingAction: ({ commit }) => {
    commit('stopLoading');
  },
  setErrorMessageAction: ({ commit }, { errorMessage }) => {
    commit('setErrorMessage', { errorMessage });
  },
};

export default actions;
