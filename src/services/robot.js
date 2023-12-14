const { taras, tarp } = require('../instances');

const getRobot = ({
  filter: {
    key,
    workspace: { id },
  },
}) => {
  const TARAS_QUERY = `#graphql
    query GetRobot($key: ID) {
      robot(filters: {key: $key}) {
        key
        name
      }
    }
  `;

  const TARP_QUERY = `#graphql
    query GetRobots($id: ID) 
      workspace(filter: {id: $id}) {
        id
        name
        robots {
          key
          missionID
          isAssignable
          last_connected_time
        }
      }
    }
  `;

  return Promise.all([
    taras({ query: TARAS_QUERY, variables: { key } }),
    tarp({ query: TARP_QUERY, variables: { id } }),
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
