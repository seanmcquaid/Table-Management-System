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
  Mutation: {
    register: async (_, { username, password }) => {
      const user = await User.create({
        username,
        password: await bcrypt.hash(password),
      });

      return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
        expiresIn: '1d',
      });
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        throw new Error("Sorry, this user doesn't exist. Please try again!");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        throw new Error('You password is incorrect!');
      }

      return jwt.sign({ id: user.id, username: user.password }, JWT_SECRET, {
        expiresIn: '1d',
      });
    },
  },
};

module.exports = resolvers;
