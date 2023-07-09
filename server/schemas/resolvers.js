const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, { username, firstName, lastName, email, password, location }) => {
      const user = await User.create({ username, firstName, lastName, email, password, location });
      const token = signToken(user);
      return { token, user };
    },

    updateUserInfo: async (parent, { username, firstName, lastName, email, location }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { username, firstName, lastName, email, location },
          { new: true }
        );
        
        return { user: updatedUser };
      }
      
      throw new AuthenticationError('Not logged in');
    },    

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;