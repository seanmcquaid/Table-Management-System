const mutations = {
  loading: state => {
    state.isLoading = true;
  },
  error: (state, { errorMessage }) => {
    state.errorMessage = errorMessage;
  },
};

export default mutations;
