const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const jwt = require('express-jwt');
const typeDefs = require('./schemas/schema');
const resolvers = require('./resolvers/resolvers');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ALGORITHM = process.env.JWT_ALGORITHM;

const app = express();
const auth = jwt({
  secret: JWT_SECRET,
  credentialsRequired: false,
  algorithms: [JWT_ALGORITHM],
});

app.use(auth);
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/graphql',
  },
  context: ({ req }) => {
    const user = req.headers.user
      ? JSON.parse(req.headers.user)
      : req.user
      ? req.user
      : null;
    return { user };
  },
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
