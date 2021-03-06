const tableTypeDefs = `
  type Table {
    name: String
    seats: Int
    isAvailable: Boolean
    username: String
    id: Int
  }

  type TableConfig {
    seatingCapacity: Float
    tables: [Table]
  }

  extend type Query {
    getTableConfig: TableConfig
    getTable(id: Int!): Table
  }

  extend type Mutation {
    addTable(name: String!, seats: Int!): TableConfig
    editTable(id: Int!, name: String!, seats: Int!): TableConfig
    changeTableAvailability(id: Int!, isAvailable: Boolean!): TableConfig
    deleteTable(id: Int!): TableConfig
  }
`;

module.exports = tableTypeDefs;
