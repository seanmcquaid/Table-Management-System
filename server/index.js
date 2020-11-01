const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const jwt = require('express-jwt');
const typeDefs = require('./schemas/schema');
const resolvers = require('./resolvers/resolvers');
const JWT_SECRET = process.env.JWT_SECRET;
console.log(JWT_SECRET);

const app = express();
const auth = jwt({
  secret: JWT_SECRET,
  credentialsRequired: false,
});
app.use(auth);
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
