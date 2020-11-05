import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const registerMutation = gql``;
