const robotSchema = `#graphql
  type Robot {
    key: ID
    name: String
    missionId: String
    isAssignable: Boolean
    lastConnectedTime: String
  }

  input WorkspaceFilter {
    id: ID
  }

  input RobotFilter {
    key: ID
    workspace: WorkspaceFilter
  }

  type Query {
    robot(filter: RobotFilter): Robot
  }
`;

module.exports = robotSchema;
