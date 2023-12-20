const robotSchema = `#graphql
  type Robot {
    key: ID
    name: String
    missionId: String
    isAssignable: Boolean
    lastConnectedTime: String
  }

  input RobotFilter {
    key: ID
  }

  input WorkspaceFilter {
    id: ID
  }

  input RobotQueryFilter {
    robot: RobotFilter
    workspace: WorkspaceFilter
  }

  input StationFilter {
    id: ID
  }

  input RobotGoInput {
    robotKey: ID!
    stationIds: [ID]!
  }

  type Query {
    robot(filter: RobotQueryFilter): Robot
  }

  type Subscription {
    go(input: RobotGoInput): Robot
  }
`;

module.exports = robotSchema;
