import { resolvers } from "@/presentation/resolvers/index.ts";
import { typeDefs } from "@/presentation/typedefs/index.ts";
import { ApolloServer } from "npm:@apollo/server@^4.1.1";

export const serverTest = new ApolloServer({
  typeDefs,
  resolvers,
});
