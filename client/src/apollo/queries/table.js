import gql from 'graphql-tag';

export const getTableConfigQuery = gql`
  query {
    getTableConfig {
      seatingCapacity
      tables {
        name
        id
        seats
        isAvailable
      }
    }
  }
`;

export const getTableQuery = gql`
  query getTableQuery($id: Int!) {
    getTable(id: $id) {
      name
      seats
      id
    }
  }
`;
