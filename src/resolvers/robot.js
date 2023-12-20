const { RobotController } = require('../controllers');

const robotResolvers = {
  Query: {
    robot: (
      _,
      {
        filter: {
          robot: { key },
          workspace: { id },
        },
      },
    ) => RobotController.getRobot(key, id),
  },
  Subscription: {
    go: {
      subscribe: (_, { input: { robotKey, stationIds } }) => {
        return RobotController.go({ robotKey, stationIds });
      },
    },
  },
};

module.exports = robotResolvers;
