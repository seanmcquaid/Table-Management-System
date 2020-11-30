const authMutations = {
  loginSuccess: (state, payload) => {
    const { token } = payload;

    localStorage.setItem('token', token);
    state.token = token;
    state.isAuthenticated = true;
  },
  registerSuccess: (state, payload) => {
    const { token } = payload;

    localStorage.setItem('token', token);
    state.token = token;
    state.isAuthenticated = true;
  },
  getUserInfoSuccess: (state, payload) => {
    const { token } = payload;

    localStorage.setItem('token', token);
    state.token = token;
    state.isAuthenticated = true;
  },
  getUserInfoError: state => {
    localStorage.removeItem('token');
    state.token = null;
    state.isAuthenticated = false;
  },
};

export default authMutations;
