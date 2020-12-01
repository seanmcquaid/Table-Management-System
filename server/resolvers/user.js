const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const resolvers = {
  Query: {
    getUserInfo: async (_, args, { token }) => {
      if (token) {
        const decodedToken = jwt.decode(token);

        const currentUserInfo = await User.findOne({
          where: { id: decodedToken.id },
        });
        return jwt.sign(
          { id: currentUserInfo.id, username: currentUserInfo.username },
          JWT_SECRET,
          {
            expiresIn: '1d',
          }
        );
      }
      throw new Error("Sorry, you're not currently authenticated!");
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

      const updatedUserInfo = await User.findOne({
        where: { id: userInfo.id },
      });

      return updatedUserInfo.seatingCapacity;
    },
    updatePassword: async (_, { newPassword }, { token }) => {
      if (!token) {
        throw new Error('Invalid token!');
      }

      const userInfo = jwt.decode(token);

      const currentUser = await User.findOne({ where: { id: userInfo.id } });

      const encryptedNewPassword = await bcrypt.hash(newPassword, 10);

      if (await bcrypt.compare(currentUser.password, encryptedNewPassword)) {
        throw new Error('The newly submitted password is the same as');
      }

      currentUser.password = encryptedNewPassword;

      await currentUser.save();

      const updatedUserInfo = await User.findOne({
        where: { id: userInfo.id },
      });

      return jwt.sign(
        { id: updatedUserInfo.id, username: updatedUserInfo.username },
        JWT_SECRET,
        {
          expiresIn: '1d',
        }
      );
    },
  },
};

module.exports = resolvers;
