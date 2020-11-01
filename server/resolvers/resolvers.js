const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const resolvers = {
  Query: {
    current: async (_, args, { user }) => {
      if (user) {
        return await User.findOne({ where: { id: user.id } });
      }
      throw new Error("Sorry, you're not currently authenticated!");
    },
  },
};
