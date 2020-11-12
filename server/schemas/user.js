const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type User {
    id: Int
    username: String
    seatingCapacity: Float
  }

  type Query {
    getUserInfo: User
    getAllUsers: [User]
  }

  type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
    updateSeatingCapacity(seatingCapacity: Float!): Float
  }
`;

module.exports = userTypeDefs;
