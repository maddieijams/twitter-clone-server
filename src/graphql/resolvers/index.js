import tweetResolvers from "./tweet-resolvers";
import TweetResolvers from "./tweet-resolvers";
import GraphQLDate from "graphql-date";
import UserResolvers from "./user-resolvers";

export default {
  Date: GraphQLDate,
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: tweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signup: UserResolvers.signup,
    login: UserResolvers.login
  }
};
