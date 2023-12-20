const GraphQLFetch = require('../graphql');
const { query } = require('./queries');

const TARP_ENDPOINT = process.env.TARP_ENDPOINT;
const TARP_TOKEN = process.env.TARP_TOKEN;

const config = {
  endpoint: TARP_ENDPOINT,
  token: TARP_TOKEN,
};

const fetch = new GraphQLFetch(config);

const getRobotByWorkspaceId = (workspaceId) =>
  fetch.query({ query: query.getRobotByWorkspaceId, variables: { id: workspaceId } });

module.exports = { getRobotByWorkspaceId };
