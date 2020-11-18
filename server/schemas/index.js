const userTypeDefs = require('./user');
const tableTypeDefs = require('./table');
const { mergeSchemas } = require('apollo-server-express');

const schemas = mergeSchemas([userTypeDefs, tableTypeDefs]);

module.exports = schemas;
