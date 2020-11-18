const express = require('express');
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const app = express();

app.use(cors());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  playground: {
    endpoint: '/graphql',
  },
  context: ({ req }) => {
    const token = req?.headers?.authorization ?? null;
    return { token };
  },
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
