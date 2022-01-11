import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

import "./config/db";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import constants from "./config/constants";
import mocks from "./mocks";

const app = express(); // create an instance of express

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/graphql",
    settings: {
      "editor.theme": "light",
    },
  },
});

// Middleware: GraphQL
SERVER.applyMiddleware({
  app,
});

mocks().then(() => {
  app.listen(constants.PORT, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`App is listening on port: ${constants.PORT}`);
    }
  });
});

export default app;
