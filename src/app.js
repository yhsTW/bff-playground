const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs: schema, resolvers });
const app = express();

server.start().then(() => {
    server.applyMiddleware({ app, path: '/graphql' });
});

module.exports = app;
