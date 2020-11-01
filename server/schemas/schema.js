const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: Int!
    username: String!
  }

  type Query {
    current: User
  }

  type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
  }
`;

module.exports = typeDefs;
