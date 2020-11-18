const root = require('./root');
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.join(__dirname, '/')).map((file) => {
  if (file !== 'index.js' && file !== 'root.js') {
    return require(`./${file}`);
  }
  return null;
});

const schemas = root.concat(files);

module.exports = schemas;
