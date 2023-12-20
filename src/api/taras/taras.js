const { query, mutation, subscription } = require('./queries');
const GraphQLFetch = require('../graphql');

const TARAS_ENDPOINT = process.env.TARAS_ENDPOINT;
const TARAS_TOKEN = process.env.TARAS_TOKEN;
const TARAS_WS_ENDPOINT = process.env.TARAS_WS_ENDPOINT;

const config = {
  endpoint: TARAS_ENDPOINT,
  token: TARAS_TOKEN,
  wsEndpoint: TARAS_WS_ENDPOINT,
};

const fetch = new GraphQLFetch(config);

const getRobot = (key) => fetch.query({ query: query.getRobotByKey, variables: { key } });

const moveTo = async (robotKey, stationId) => {
  const response = await fetch.mutation({
    query: mutation.moveTo,
    variables: { robotKey, stationId },
  });

  return response.data.task.tmpCreateSpecificDestinationTask;
};

const moving = ({ taskId, action }) => {
  return fetch.subscription({
    query: subscription.moving,
    variables: { id: taskId },
    action,
  });
};

module.exports = { getRobot, moveTo, moving };
