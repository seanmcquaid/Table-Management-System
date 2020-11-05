import gql from 'graphql-tag';

export const getUserInfo = gql`
  mutation {
    getUserInfo {
      username
      id
    }
  }
`;
