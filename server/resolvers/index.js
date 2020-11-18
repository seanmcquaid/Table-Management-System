const fs = require('fs');
const path = require('path');

const resolvers = {
  Query: {},
  Mutation: {},
};

const files = fs.readdirSync(path.join(__dirname, '/'));

files.forEach((file) => {
  if (file !== 'index.js') {
    const resolver = require(`./${file}`);
    resolvers.Query = { ...resolvers.Query, ...resolver.Query };
    resolvers.Mutation = { ...resolvers.Mutation, ...resolver.Mutation };
  }
});

module.exports = resolvers;
