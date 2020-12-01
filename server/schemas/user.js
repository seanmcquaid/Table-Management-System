const userTypeDefs = `
  type User {
    id: Int
    username: String
    seatingCapacity: Int
  }

  extend type Query {
    getUserInfo: String
  }

  extend type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
    updateSeatingCapacity(seatingCapacity: Int!): Int
    updatePassword(newPassword: String!): String
  }
`;

module.exports = userTypeDefs;
