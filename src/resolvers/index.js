const robotResolvers = require('./robot');

const resolvers = {
  Query: { ...robotResolvers.Query },
};

module.exports = resolvers;
