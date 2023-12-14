const fetch = require('node-fetch');

const TARAS_ENDPOINT = process.env.TARAS_ENDPOINT;
const TARP_ENDPOINT = process.env.TARP_ENDPOINT;
const TARP_AUTHORIZATION = process.env.TARP_TOKEN;

const commonFetch = ({ endpoint, headers, query, variables }) => {
    return fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...headers },
        body: JSON.stringify({ query, variables })
    }).then((res) => res.json());
};

const taras = ({ query, variables }) => commonFetch({ endpoint: TARAS_ENDPOINT, query, variables });

const tarp = ({ query, variables }) =>
    commonFetch({
        endpoint: TARP_ENDPOINT,
        query,
        variables,
        headers: { Authorization: TARP_AUTHORIZATION }
    });

exports.taras = taras;
exports.tarp = tarp;
