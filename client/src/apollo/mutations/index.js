import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export const registerMutation = gql`
  mutation RegisterMutation($username: String!, $password: String!) {
    register(username: $username, password: $password)
  }
`;
