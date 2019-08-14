import { GraphQLServer } from "graphql-yoga";
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    name: String!
  }
`;

const resolvers = {
  Query: {
    name: () => `Hello ${name || "World"}`
  }
};

const resolvers = {
  Query: {
    name: () => "irayya"
  }
};

export default resolvers;

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
