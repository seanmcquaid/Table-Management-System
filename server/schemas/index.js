const userTypeDefs = require("./user");
const tableConfigTypeDefs = require("./tableConfig");

const schemas = {
  ...userTypeDefs,
  ...tableConfigTypeDefs,
};

module.exports = schemas;
