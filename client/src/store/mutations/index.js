const mutations = {
  startLoading: state => {
    state.isLoading = true;
    state.errorMessage = null;
  },
  stopLoading: state => {
    state.isLoading = false;
  },
  setErrorMessage: (state, { errorMessage }) => {
    state.errorMessage = errorMessage;
  },
};

export default mutations;
