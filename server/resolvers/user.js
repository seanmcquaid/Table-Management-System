const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const resolvers = {
  Query: {
    getUserInfo: async (_, args, { token }) => {
      const user = {};
      if (token) {
        // decode token and use this to find user info
        const userInfo = jwt.decode(token);
        console.log(userInfo);
        return await User.findOne({ where: { id: userInfo.id } });
      }
      throw new Error("Sorry, you're not currently authenticated!");
    },
    getAllUsers: async (_) => {
      return await User.findAll();
    },
  },
  Mutation: {
    register: async (_, { username, password }) => {
      const user = await User.findOne({ where: { username } });

      if (user) {
        throw new Error('Sorry, this user already exists. Please try again!');
      }

      const createdUser = await User.create({
        username,
        password: await bcrypt.hash(password, 10),
        seatingCapacity: 0,
      });

      return jwt.sign(
        { id: createdUser.id, username: createdUser.username },
        JWT_SECRET,
        {
          expiresIn: '1d',
        }
      );
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        throw new Error("Sorry, this user doesn't exist. Please try again!");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new Error('You password is incorrect!');
      }

      return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
        expiresIn: '1d',
      });
    },
    updateSeatingCapacity: async (_, { seatingCapacity }, { token }) => {
      if (!token) {
        throw new Error('Invalid token!');
      }

      const userInfo = jwt.decode(token);

      const currentUser = await User.findOne({ where: { id: userInfo.id } });

      currentUser.seatingCapacity = parseInt(seatingCapacity, 10);

      await currentUser.save();

      console.log(currentUser);

      const updatedUserInfo = await User.findOne({
        where: { id: userInfo.id },
      });

      console.log(updatedUserInfo);

      return updatedUserInfo.seatingCapacity;
    },
  },
};

module.exports = resolvers;
