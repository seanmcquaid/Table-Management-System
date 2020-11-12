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
    editTable(id: Int!, name: String!, seats: Int!): TableConfig
    changeTableAvailability(id: Int!, isAvailable: Boolean!): TableConfig
    deleteTable(id: Int!): TableConfig
  }
`;

module.exports = tableConfigTypeDefs;
