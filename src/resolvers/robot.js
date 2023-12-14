const { getRobot } = require('../services/robot');

const robotResolvers = {
    Query: {
        robot: (_, args) => getRobot(args.key)
    }
};

module.exports = robotResolvers;
