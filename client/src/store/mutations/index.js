const mutations = {
  loading: state => {
    state.isLoading = true;
    console.log('loading', state);
  },
};

export default mutations;
