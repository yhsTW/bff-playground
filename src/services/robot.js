const { taras } = require('../instances');

const getRobot = (key) => {
    const query = `#graphql
      query GetRobot($key: ID) {
        robot(filters: {key: $key}) {
          key
          name
        }
      }
    `;

    return Promise.all([taras({ query, variables: { key } })]).then((res) => {
        const robot = res[0].data.robot[0];

        return { key: robot.key, name: robot.name };
    });
};

exports.getRobot = getRobot;
