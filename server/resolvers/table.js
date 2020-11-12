const { User, Table } = require('../models');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    getTableInfo: async (_, { id }, { token }) => {
      const userInfo = jwt.decode(token);

      const { username } = await User.findOne({
        where: { username: userInfo.username },
      });

      return await Table.findOne({
        where: {
          username,
          id,
        },
      });
    },
    getAllTables: async (_, args, { token }) => {
      const userInfo = jwt.decode(token);

      const { username } = await User.findOne({
        where: { username: userInfo.username },
      });

      return await Table.findAll({
        where: {
          username,
        },
      });
    },
  },
  Mutation: {
    addTable: async (_, { name, seats }, { token }) => {
      const userInfo = jwt.decode(token);

      const { username, seatingCapacity } = await User.findOne({
        where: { username: userInfo.username },
      });

      await Table.create({
        username,
        name,
        seats,
        isAvailable: false,
      });

      const tables = await Table.findAll({ where: { username } });

      return {
        username,
        seatingCapacity,
        tables,
      };
    },
    editTable: async (_, { id, name, seats }, { token }) => {
      const userInfo = jwt.decode(token);

      const { username, seatingCapacity } = await User.findOne({
        where: { username: userInfo.username },
      });

      await Table.update(
        {
          name,
          seats,
        },
        { where: { id } }
      );

      const tables = await Table.findAll({ where: { username } });

      return {
        username,
        seatingCapacity,
        tables,
      };
    },
    changeTableAvailability: async (_, { id, isAvailable }, { token }) => {
      const userInfo = jwt.decode(token);

      const { username, seatingCapacity } = await User.findOne({
        where: { username: userInfo.username },
      });

      await Table.update(
        {
          isAvailable,
        },
        { where: { id } }
      );

      const tables = await Table.findAll({ where: { username } });

      return {
        username,
        seatingCapacity,
        tables,
      };
    },
    deleteTable: async (_, { id }, { token }) => {
      const userInfo = jwt.decode(token);

      const { username, seatingCapacity } = await User.findOne({
        where: { username: userInfo.username },
      });

      await Table.destroy({ where: { id } });

      const tables = await Table.findAll({ where: { username } });

      return {
        username,
        seatingCapacity,
        tables,
      };
    },
  },
};

module.exports = resolvers;
