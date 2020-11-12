const userResolvers = require('./user');
const tableResolvers = require('./table');

const resolvers = {
  ...userResolvers,
  ...tableResolvers,
};

module.exports = resolvers;
