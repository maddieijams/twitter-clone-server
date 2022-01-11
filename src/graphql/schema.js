import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Status {
    message: String!
  }

  type Tweet {
    _id: ID!
    text: String
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    getTweet(_id: ID!): Tweet
    getTweets: [Tweet]
  }

  type Mutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String, email: String): Tweet
    deleteTweet(_id: ID!): Status
    signup(
      email: String!
      fullName: String!
      password: String!
      avatar: String
      username: String
    ): User
    login(email: String!, password: String!): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
