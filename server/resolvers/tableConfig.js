const resolvers = {
  Query: {
    getTableConfigInfo: (_, { id }, { token }) => {},
    getAllTableConfigs: (_, args, { token }) => {},
  },
  Mutation: {
    addTable: (_, { name, seats }, { token }) => {},
    editTable: (_, { name, seats }, { token }) => {},
    changeTableAvailability: (_, { name, isAvailable }, { token }) => {},
    deleteTable: (_, { name }, { token }) => {},
  },
};

module.exports = resolvers;
