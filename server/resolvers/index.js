const userResolvers = require('./user');
const tableResolvers = require('./table');

const resolvers = {
  Query: { ...userResolvers.Query, ...tableResolvers.Query },
  Mutation: { ...userResolvers.Mutation, ...tableResolvers.Mutation },
};

module.exports = resolvers;
