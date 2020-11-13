const { gql } = require('apollo-server-express');

const tableTypeDefs = gql`
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
    getTableInfo(id: Int!): Table
  }

  type Mutation {
    addTable(name: String!, seats: Int!): TableConfig
    editTable(id: Int!, name: String!, seats: Int!): TableConfig
    changeTableAvailability(id: Int!, isAvailable: Boolean!): TableConfig
    deleteTable(id: Int!): TableConfig
  }
`;

module.exports = tableTypeDefs;
