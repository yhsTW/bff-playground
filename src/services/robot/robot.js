const { RobotInterface } = require('../../interfaces');

const getRobot = ({ key, id }) => {
  return RobotInterface.getRobot({ key, id });
};

const go = async ({ robotKey, stationIds, callback }) => {
  const response = await RobotInterface.moveTo(robotKey, stationIds[0]);

  if (!response.id) return;

  return RobotInterface.go(response.id, callback);
};

module.exports = { getRobot, go };
