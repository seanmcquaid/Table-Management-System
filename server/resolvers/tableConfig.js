const { User, TableConfig } = require('../models');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    getTableConfigInfo: async (_, { id }, { token }) => {
      const userInfo = jwt.decode(token);

      const { username } = await User.findOne({
        where: { username: userInfo.username },
      });

      return await TableConfig.findOne({
        where: {
          username,
          id,
        },
      });
    },
    getAllTableConfigs: (_, args, { token }) => {
      const userInfo = jwt.decode(token);

      const { username } = await User.findOne({
        where: { username: userInfo.username },
      });

      return await TableConfig.findAll({
        where: {
          username,
        },
      })
    },
  },
  Mutation: {
    addTable: (_, { name, seats }, { token }) => {},
    editTable: (_, { name, seats }, { token }) => {},
    changeTableAvailability: (_, { name, isAvailable }, { token }) => {},
    deleteTable: (_, { name }, { token }) => {},
  },
};

module.exports = resolvers;
