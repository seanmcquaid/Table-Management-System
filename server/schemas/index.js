const userTypeDefs = require('./user');
const tableTypeDefs = require('./table');
const root = require('./root');

const schemas = root.concat([userTypeDefs, tableTypeDefs]);

module.exports = schemas;
