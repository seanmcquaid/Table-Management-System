const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP());

app.listen(3000, () => {
  console.log('listening on port 3000');
});
