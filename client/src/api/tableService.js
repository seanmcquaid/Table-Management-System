import { apolloClient } from '../apollo';
import {
  addTableMutation,
  changeTableAvailabilityMutation,
  deleteTableMutation,
  editTableMutation,
} from '../apollo/mutations';
import { getTableQuery, getTableConfigQuery } from '../apollo/queries';

export const getTableConfig = () =>
  apolloClient.query({
    query: getTableConfigQuery,
  });

export const getTable = id =>
  apolloClient.query({ query: getTableQuery, variables: { id } });

export const addTable = (name, seats) =>
  apolloClient.mutate({
    mutation: addTableMutation,
    variables: { name, seats },
  });

export const deleteTable = id =>
  apolloClient.mutate({
    mutation: deleteTableMutation,
    variables: { id },
  });

export const editTable = (id, name, seats) =>
  apolloClient.mutate({
    mutation: editTableMutation,
    variables: { id, name, seats },
  });

export const changeTableAvailability = (id, isAvailable) =>
  apolloClient.mutate({
    mutation: changeTableAvailabilityMutation,
    variables: { id, isAvailable },
  });
