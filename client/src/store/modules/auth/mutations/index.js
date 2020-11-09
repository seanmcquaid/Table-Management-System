const authMutations = {
  loginSuccess: (state, payload) => {
    // add token to local storage
    console.log(state, payload);
  },
  registerSuccess: (state, payload) => {
    // add token to local storage
    console.log(state, payload);
  },
};

export default authMutations;
