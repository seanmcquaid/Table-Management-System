const userTypeDefs = require('./user');
const tableTypeDefs = require('./table');

const schemas = userTypeDefs.concat(tableTypeDefs);

module.exports = schemas;
