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
  editTableAction: ({ commit }, payload) => {
    commit('startLoading');

    const { id, name, seats } = payload;

    return tableService
      .editTable(id, name, seats)
      .then(({ data }) => {
        const { editTable } = data;
        return commit('editTableSuccess', { ...editTable });
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
  changeTableAvailabilityAction: ({ commit }, payload) => {
    commit('startLoading');

    const { id, isAvailable } = payload;

    return tableService
      .changeTableAvailability(id, isAvailable)
      .then(({ data }) => {
        const { changeTableAvailability } = data;
        return commit('changeTableAvailabilitySuccess', {
          ...changeTableAvailability,
        });
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
  deleteTableAction: ({ commit }, payload) => {
    commit('startLoading');

    const { id } = payload;

    return tableService
      .deleteTable(id)
      .then(({ data }) => {
        const { deleteTable } = data;
        return commit('deleteTableSuccess', {
          ...deleteTable,
        });
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
};

export default actions;
