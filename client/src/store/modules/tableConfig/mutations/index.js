const mutations = {
  getTableConfigSuccess: (state, { seatingCapacity, tables }) => {
    state.seatingCapacity = seatingCapacity;
    state.tables = tables;
  },
  addTableSuccess: (state, { tables }) => {
    state.tables = tables;
  },
  editTableSuccess: (state, { tables }) => {
    state.tables = tables;
  },
  changeTableAvailabilitySuccess: (state, { tables }) => {
    state.tables = tables;
  },
  deleteTableSuccess: (state, { tables }) => {
    state.tables = tables;
  },
  updateSeatingCapacitySuccess: (state, { seatingCapacity }) => {
    state.seatingCapacity = seatingCapacity;
  },
};

export default mutations;
