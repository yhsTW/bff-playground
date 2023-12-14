const robotSchema = `#graphql
    type Robot {
        key: String
        name: String
    }

    type Query {
        robot(key: ID): Robot
    }
`;

module.exports = robotSchema;
