const fetch = require('node-fetch');

const TARAS_ENDPOINT = process.env.TARAS_ENDPOINT;
const TARAS_TOKEN = process.env.TARAS_TOKEN;
const TARP_ENDPOINT = process.env.TARP_ENDPOINT;
const TARP_TOKEN = process.env.TARP_TOKEN;

const commonFetch = ({ endpoint, headers, query, variables }) => {
  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify({ query, variables }),
  }).then((res) => res.json());
};

const taras = ({ query, variables }) =>
  commonFetch({
    endpoint: TARAS_ENDPOINT,
    query,
    variables,
    headers: { Authorization: `Bearer ${TARAS_TOKEN}` },
  });

const tarp = ({ query, variables }) =>
  commonFetch({
    endpoint: TARP_ENDPOINT,
    query,
    variables,
    headers: { Authorization: `Bearer ${TARP_TOKEN}` },
  });

exports.taras = taras;
exports.tarp = tarp;
