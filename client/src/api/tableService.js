import { apolloClient } from '../apollo';
import {} from '../apollo/mutations';
import { getTableQuery, getTableConfigQuery } from '../apollo/queries';

export const getTableConfig = () =>
  apolloClient.query({
    query: getTableConfigQuery,
  });

export const getTable = id =>
  apolloClient.query({ query: getTableQuery, variables: { id } });

export const addTable = (name, seats) => {};

export const deleteTable = id => {};

export const editTable = (id, name, seats) => {};

export const changeTableAvailability = (id, isAvailable) => {};
