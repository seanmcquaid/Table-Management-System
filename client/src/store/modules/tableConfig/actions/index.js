import * as tableService from '../../../../api/tableService';
import * as userService from '../../../../api/userService';

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
  addTableAction: ({ commit }, { name, seats }) => {
    commit('startLoading');

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
  editTableAction: ({ commit }, { id, name, seats }) => {
    commit('startLoading');

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
  changeTableAvailabilityAction: ({ commit }, { id, isAvailable }) => {
    commit('startLoading');

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
  deleteTableAction: ({ commit }, { id }) => {
    commit('startLoading');

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
  updateSeatingCapacityAction: ({ commit }, { seatingCapacity }) => {
    commit('startLoading');

    return userService
      .updateSeatingCapacity(parseInt(seatingCapacity))
      .then(({ data }) => {
        const { updateSeatingCapacity } = data;
        console.log(updateSeatingCapacity);
        return commit('updateSeatingCapacitySuccess', {
          seatingCapacity: updateSeatingCapacity,
        });
      })
      .catch(err => {
        console.log(Object.entries(err));
      })
      .finally(() => {
        return commit('stopLoading');
      });
  },
};

export default actions;
