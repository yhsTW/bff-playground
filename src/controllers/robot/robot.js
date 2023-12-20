const { RobotService } = require('../../services');

const getRobot = async (key, id) => {
  const robot = await RobotService.getRobot({ key, id });

  return robot;
};

const go = async ({ robotKey, stationIds }) => {
  const complete = () => {
    console.log('complete!!');
  };

  return RobotService.go({ robotKey, stationIds, callback: complete });
};

module.exports = { getRobot, go };
