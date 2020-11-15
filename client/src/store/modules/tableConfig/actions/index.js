import * as tableService from '../../../../api/tableService';

const actions = {
  getTableConfigAction: ({ commit }) => {
    commit('startLoading');

    return tableService
      .getTableConfig()
      .then(({ data }) => {
        const { getTableConfig } = data;
        return commit('getTableConfigSuccess', { ...getTableConfig });
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
  addTableAction: ({ commit }, payload) => {
    commit('startLoading');

    const { name, seats } = payload;

    return tableService
      .addTable(name, seats)
      .then(({ data }) => {
        const { addTable } = data;
        return commit('addTableSuccess', { ...addTable });
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
  editTableAction: ({ commit }, payload) => {},
  changeTableAvailabilityAction: ({ commit }, payload) => {},
  deleteTableAction: ({ commit }, payload) => {},
};

export default actions;
