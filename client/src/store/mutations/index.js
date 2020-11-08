const mutations = {
  loading: state => {
    state.isLoading = true;
    state.errorMessage = null;
  },
  error: (state, { errorMessage }) => {
    state.errorMessage = errorMessage;
  },
};

export default mutations;
