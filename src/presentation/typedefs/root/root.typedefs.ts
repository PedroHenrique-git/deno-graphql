import { gql } from "https://deno.land/x/graphql_tag@0.1.2/mod.ts";

export const rootTypeDefs = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;
