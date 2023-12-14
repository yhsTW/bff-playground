const { taras, tarp } = require('../instances');
const { query } = require('../graphql/robot');

const getRobot = ({
  filter: {
    key,
    workspace: { id },
  },
}) => {
  return Promise.all([
    taras({ query: query.taras.getRobot, variables: { key } }),
    tarp({ query: query.tarp.getRobotByWorkspaceId, variables: { id } }),
  ]).then((res) => {
    const tarasRobot = res[0].data.robot[0];
    const tarpRobot = res[1].data.workspace[0].robots.filter((robot) => robot.key === key)[0];

    return {
      key: tarasRobot.key,
      name: tarasRobot.name,
      missionId: tarpRobot.missionID,
      isAssignable: tarpRobot.isAssignable,
      lastConnectedTime: tarpRobot.last_connected_time,
    };
  });
};

exports.getRobot = getRobot;
