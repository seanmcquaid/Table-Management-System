const userTypeDefs = require('./user');
const tableTypeDefs = require('./table');

const schemas = {
  ...userTypeDefs,
  ...tableTypeDefs,
};

module.exports = schemas;
