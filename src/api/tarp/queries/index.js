const {
  query: robotQuery,
  mutation: robotMutation,
  subscription: robotSubscription,
} = require('./robot.query');

module.exports = {
  query: { ...robotQuery },
  mutation: { ...robotMutation },
  subscription: { ...robotSubscription },
};
