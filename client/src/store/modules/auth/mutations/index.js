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
  getUserInfoSuccess: (state, payload) => {
    const { token } = payload;

    localStorage.setItem('token', token);
    state.token = token;
  },
  getUserInfoError: state => {
    localStorage.removeItem('token');
    state.token = null;
  },
};

export default authMutations;
