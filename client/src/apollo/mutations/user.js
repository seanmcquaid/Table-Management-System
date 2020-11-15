import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation loginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export const registerMutation = gql`
  mutation registerMutation($username: String!, $password: String!) {
    register(username: $username, password: $password)
  }
`;

export const updateSeatingCapacityMutation = gql`
  mutation updateSeatingCapacityMutation($seatingCapacity: Int!) {
    updateSeatingCapacity(seatingCapacity: $seatingCapacity)
  }
`;
