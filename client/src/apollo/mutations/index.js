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

export const addTableMutation = gql`
  mutation addTableMutation($name: String!, $seats: Int!) {
    addTable(name: $name, seats: $seats)
  }
`;

export const editTableMutation = gql`
  mutation editTableMutation($id: Int!, $name: String!, $seats: Int!) {
    editTable(id: $id, name: $name, seats: $seats)
  }
`;

export const changeTableAvailabilityMutation = gql`
  mutation changeTableAvailabilityMutation($id: Int!, $isAvailable: Boolean!) {
    changeTableAvailability(id: $id, $isAvailable: $$isAvailable)
  }
`;

export const deleteTableMutation = gql`
  mutation deleteTableMutation($id: Int!) {
    deleteTable(id: $id)
  }
`;
