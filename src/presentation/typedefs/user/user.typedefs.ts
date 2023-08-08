import { gql } from "https://deno.land/x/graphql_tag@0.1.2/mod.ts";

export const userTypeDefs = gql`
  input UserInput {
    name: String!
    email: String!
  }

  type User {
    name: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  extend type Mutation {
    createUser(userInput: UserInput!): User!
  }
`;
