const { gql } = require('apollo-server-express');

const tableConfigTypeDefs = gql`
  type Table {
    name: String!
    seats: Float!
    isAvailable: Boolean!
  }

  type TableConfig {
    seatingCapacity: Float!
    tables: [Table!]!
    username: String!
  }

  type Query {
    getTableConfigInfo: TableConfig!
    getAllTableConfigs: [TableConfig!]!
  }

  type Mutation {
    addTable(name: String!, seats: Float!): TableConfig
    editTable(name: String!, seats: Float!): TableConfig
    changeTableAvailability(name: String!, isAvailable: Boolean!): TableConfig
    deleteTable(name: String!): TableConfig
  }
`;

module.exports = tableConfigTypeDefs;
