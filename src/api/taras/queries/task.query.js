const moveTo = `#graphql
  mutation MoveTo($robotKey: ID!, $stationId: ID!) {
    task {
      tmpCreateSpecificDestinationTask(input: {robotKey: $robotKey, stationId: $stationId}) {
        ...on Task{
          id
        }
        
        ...on OperationInfo {
          messages {
            kind
            field
            message
          }
        }
      }
    }
  }
`;

const moving = `#graphql
  subscription MoveTracking($id: ID) {
    task(filters: {id: $id}) {
      ...on TaskSubscriptionPayload {
        result {
          id
          status
        }
      }

      ...on OperationInfo {
        messages {
          kind
          field
          message
        }
      }
    }
  }
`;

const query = {};
const mutation = { moveTo };
const subscription = { moving };

module.exports = { query, mutation, subscription };
