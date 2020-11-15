import * as tableService from '../../../../api/tableService';

const actions = {
  getTableConfigInfoAction: ({ commit }) => {
    commit('startLoading');

    return tableService
      .getTableConfigInfo()
      .then(({ data }) => {
        const { getTableConfigInfo } = data;
        return commit('getTableConfigInfoSuccess', { ...getTableConfigInfo });
      })
      .catch(({ graphQLErrors }) => {
        return commit('setErrorMessage', {
          errorMessage:
            graphQLErrors[0].message ??
            'There was a problem logging in, please try again!',
        });
      })
      .finally(() => {
        return commit('stopLoading');
      });
  },
  addTableAction: ({ commit }, payload) => {},
  editTableAction: ({ commit }, payload) => {},
  changeTableAvailabilityAction: ({ commit }, payload) => {},
  deleteTableAction: ({ commit }, payload) => {},
};

export default actions;
