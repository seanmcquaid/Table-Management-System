import { apolloClient } from '../apollo';
import {
  loginMutation,
  registerMutation,
  updateSeatingCapacityMutation,
} from '../apollo/mutations/user';
import { getUserInfoQuery } from '../apollo/queries/user';

export const getUserInfo = () =>
  apolloClient.query({
    query: getUserInfoQuery,
  });

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

export const updateSeatingCapacity = seatingCapacity =>
  apolloClient.mutate({
    mutation: updateSeatingCapacityMutation,
    variables: { seatingCapacity },
  });
