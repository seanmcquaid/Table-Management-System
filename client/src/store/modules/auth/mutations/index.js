const authMutations = {
  loginSuccess: (state, payload) => {
    const { token } = payload;

    localStorage.setItem('token', token);
    state.token = token;
  },
  registerSuccess: (state, payload) => {
    const { token } = payload;

    localStorage.setItem('token', token);
    state.token = token;
  },
};

export default authMutations;
