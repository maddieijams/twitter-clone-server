import { gql } from "apollo-server-express";

export default gql`
  type Tweet {
    _id: String
    text: String
  }

  type Query {
    getTweets: [Tweet]
  }

  schema {
    query: Query
  }
`;

// const Tweet = gql`
//   type Tweet {
//     _id: String
//     text: String
//   }
// `;

// const Query = gql`
//   type Query {
//     getTweets: [Tweet]
//   }
// `;

// const schema = gql`
//     query: Query
// `;

// export default schema;
