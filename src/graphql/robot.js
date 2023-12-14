const TARAS_QUERIES = {
  getRobot: `#graphql
    query GetRobot($key: ID) {
      robot(filters: {key: $key}) {
        key
        name
      }
    }
  `,
};

const TARP_QUERIES = {
  getRobotByWorkspaceId: `#graphql
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
  `,
};

exports.query = { taras: { ...TARAS_QUERIES }, tarp: { ...TARP_QUERIES } };
