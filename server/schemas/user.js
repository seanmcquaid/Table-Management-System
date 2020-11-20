const userTypeDefs = `
  type User {
    id: Int
    username: String
    seatingCapacity: Int
  }

  extend type Query {
    getUserInfo: User
    getAllUsers: [User]
  }

  extend type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
    updateSeatingCapacity(seatingCapacity: Int!): Int
  }
`;

module.exports = userTypeDefs;
