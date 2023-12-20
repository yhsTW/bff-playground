const Taras = require('../../api/taras');
const Tarp = require('../../api/tarp');

const getRobot = ({ key, id }) => {
  return Promise.all([Taras.getRobot(key), Tarp.getRobotByWorkspaceId(id)]).then(
    ([taras, tarp]) => {
      const tarasRobot = taras.data.robot[0];
      const tarpRobot = tarp.data.workspace[0].robots.filter((robot) => robot.key === key)[0];

      return {
        key: tarasRobot.key,
        name: tarasRobot.name,
        missionId: tarpRobot.missionID,
        isAssignable: tarpRobot.isAssignable,
        lastConnectedTime: tarpRobot.last_connected_time,
      };
    },
  );
};

const moveTo = (robotKey, stationId) => {
  return Taras.moveTo(robotKey, stationId);
};

const go = async (taskId, callback) => {
  const next = (data) => {
    console.log('next: ', data.task.result);
    const task = data.task.result[0];
    const COMPLETED = ['COMPLETED', 'TIMEOUT', 'CANCELED', 'CLEANING_UP'];

    return COMPLETED.includes(task.status) ? false : true;
  };

  const onSuccess = () => {
    if (callback) callback();

    return 'complete';
  };

  return Taras.moving({ taskId, action: { next, onSuccess } });
};

module.exports = { getRobot, moveTo, go };
