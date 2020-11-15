import gql from 'graphql-tag';

export const getTableConfigQuery = gql`
  query {
    getTableConfig {
      seatingCapacity
      tables
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
