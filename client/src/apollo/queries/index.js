import gql from 'graphql-tag';

export const getUserInfoQuery = gql`
  query {
    getUserInfo {
      username
      id
    }
  }
`;

export const getTableConfigQuery = gql``;

export const getTable = gql`
  query getTableQuery($id: Int!) {
    getTable(id: $id)
  }
`;
