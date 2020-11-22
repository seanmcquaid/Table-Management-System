const { User, Table } = require('../models');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    getTableConfig: async (_, args, { token }) => {
      const userInfo = jwt.decode(token);

      const { seatingCapacity } = await User.findOne({
        where: { username: userInfo.username },
      });

      const tables = await Table.findAll({
        where: { username: userInfo.username },
      });

      return {
        seatingCapacity,
        tables,
      };
    },
    getTable: async (_, { id }) => {
      return await Table.findOne({ where: { id } });
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
        seatingCapacity,
        tables,
      };
    },
  },
};

module.exports = resolvers;
