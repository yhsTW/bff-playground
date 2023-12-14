const { getRobot } = require('../services/robot');

const robotResolvers = {
  Query: {
    robot: (_, args) => getRobot(args),
  },
};

module.exports = robotResolvers;
