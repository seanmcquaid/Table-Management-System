const userResolvers = require("./user");
const tableConfigResolvers = require("./tableConfig");

const resolvers = {
  ...userResolvers,
  ...tableConfigResolvers,
};

module.exports = resolvers;
