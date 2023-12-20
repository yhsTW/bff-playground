const getRobotByKey = `#graphql
  query GetRobot($key: ID) {
    robot(filters: {key: $key}) {
      key
      name
    }
  }
`;

const query = { getRobotByKey };
const mutation = {};
const subscription = {};

module.exports = { query, mutation, subscription };
