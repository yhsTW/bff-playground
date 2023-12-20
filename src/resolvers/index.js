const robotResolvers = require('./robot');

const resolvers = {
  Query: { ...robotResolvers.Query },
  Subscription: { ...robotResolvers.Subscription },
};

module.exports = resolvers;
