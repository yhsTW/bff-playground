const getRobotByWorkspaceId = `#graphql
    query GetRobotByWorkspaceId($id: ID) {
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

const query = { getRobotByWorkspaceId };
const mutation = {};
const subscription = {};

module.exports = { query, mutation, subscription };
