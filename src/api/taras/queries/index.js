const {
  query: robotQuery,
  mutation: robotMutation,
  subscription: robotSubscription,
} = require('./robot.query');
const {
  query: taskQuery,
  mutation: taskMutation,
  subscription: taskSubscription,
} = require('./task.query');

module.exports = {
  query: { ...robotQuery, ...taskQuery },
  mutation: { ...robotMutation, ...taskMutation },
  subscription: { ...robotSubscription, ...taskSubscription },
};
