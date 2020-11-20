const userTypeDefs = `
  type User {
    id: Int
    username: String
    seatingCapacity: Float
  }

  extend type Query {
    getUserInfo: User
    getAllUsers: [User]
  }

  extend type Mutation {
    register(username: String!, password: String!): String
    login(username: String!, password: String!): String
    updateSeatingCapacity(seatingCapacity: Float!): Float
  }
`;

module.exports = userTypeDefs;
