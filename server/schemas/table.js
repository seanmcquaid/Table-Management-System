const { gql } = require('apollo-server-express');

const tableConfigTypeDefs = gql`
  type Table {
    name: String
    seats: Int
    isAvailable: Boolean
    username: String
    id: Int
  }

  type TableConfig {
    seatingCapacity: Int
    tables: [Table]
    username: String
  }

  type Query {
    getTableConfigInfo: TableConfig
    getAllTableConfigs: [TableConfig]
  }

  type Mutation {
    addTable(name: String!, seats: Int!): TableConfig
    editTable(name: String!, seats: Int!): TableConfig
    changeTableAvailability(name: String!, isAvailable: Boolean!): TableConfig
    deleteTable(name: String!): TableConfig
  }
`;

module.exports = tableConfigTypeDefs;
