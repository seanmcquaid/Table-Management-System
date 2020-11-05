import { apolloClient } from '../apollo';
import { loginMutation, registerMutation } from '../apollo/mutations';

export const login = (username, password) =>
  apolloClient.mutate({
    mutation: loginMutation,
    variables: { username, password },
  });

export const register = (username, password) =>
  apolloClient.mutate({
    mutation: registerMutation,
    variables: { username, password },
  });
