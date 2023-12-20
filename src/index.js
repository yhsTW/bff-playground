require('dotenv').config();
const { httpServer, server, app } = require('./app');
const cors = require('cors');
const { expressMiddleware } = require('@apollo/server/express4');
const express = require('express');

const PORT = 3000;

const handleListening = () => {
  console.log(`bff-playground listening on port ${PORT}`);
};

server.start().then(() => {
  app.use('/graphql', cors(), express.json(), expressMiddleware(server));
  httpServer.listen(PORT, handleListening);
});
