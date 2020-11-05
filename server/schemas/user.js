const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type User {
    id: Int!
    username: String!
  }

  type Query {
    getUserInfo: User
    getAllUsers: [User!]!
  }

  type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
  }
`;

module.exports = userTypeDefs;
