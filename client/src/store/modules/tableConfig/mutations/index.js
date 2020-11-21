const mutations = {
  getTableConfigSuccess: (state, { seatingCapacity, tables }) => {
    console.log(state.seatingCapacity);
    state.seatingCapacity = seatingCapacity;
    state.tables = tables;
    console.log(state.seatingCapacity);
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
