const prisma = require('../prisma/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "This is secret key";

const resolvers = {
  Query: {
    // Return all users; if no users exist, return an empty array.
    getUsers: async () => {
      const users = await prisma.user.findMany();
      return users || []; // ensure we never return null
    },
    // Return the authenticated user based on the token.
    getUser: async (_, __, context) => {
      if (!context.userId) {
        throw new Error("Not authenticated");
      }
      const userId = parseInt(context.userId, 10);
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
  },
  Mutation: {
    signUpUser: async (_, { name, email, password }) => {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        throw new Error("User already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: { name, email, password: hashedPassword },
      });
      const token = jwt.sign({ userId: newUser.id }, secret);
      return { token };
    },
    signInUser: async (_, { email, password }) => {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        throw new Error("User does not exist!");
      }
      if (!bcrypt.compareSync(password, user.password)) {
        throw new Error("Password incorrect");
      }
      const token = jwt.sign({ userId: user.id }, secret);
      return { token };
    },
  },
};

module.exports = resolvers;
