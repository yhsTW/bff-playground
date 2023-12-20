const fetch = require('node-fetch');
const { createClient } = require('graphql-ws');
const ws = require('ws');

class AbstractGraphQL {
  constructor({ endpoint, wsEndpoint, token }) {
    this.endpoint = endpoint;
    this.token = token;
    this.wsEndpoint = wsEndpoint;
  }

  query() {}
  mutation() {}
  subscription() {}
}

class GraphQLFetch extends AbstractGraphQL {
  constructor({ endpoint, token, wsEndpoint }) {
    super({ endpoint, token, wsEndpoint });
  }

  async #execute({ query, variables }) {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this.token}` },
      body: JSON.stringify({ query, variables }),
    });

    return response.json();
  }

  async #subscribe({ query, variables, action }) {
    const client = createClient({
      url: this.wsEndpoint,
      webSocketImpl: ws,
      connectionParams: { Authorization: `Bearer ${this.token}` },
    });

    return await (async () => {
      const subscription = client.iterate({ query, variables });

      for await (const result of subscription) {
        if (result.data) {
          const keepGoing = action.next(result.data);

          if (keepGoing) {
            subscription.next();
          } else {
            subscription.return(action.onSuccess());
          }
        }

        if (result.errors) {
          action.error(result.errors);
          subscription.return(result.errors);
        }
      }

      return subscription.return(action.onSuccess());
    })();
  }

  query({ query, variables }) {
    return this.#execute({ query, variables });
  }

  mutation({ query, variables }) {
    return this.#execute({ query, variables });
  }

  subscription({ query, variables, action }) {
    return this.#subscribe({ query, variables, action });
  }
}

module.exports = GraphQLFetch;
