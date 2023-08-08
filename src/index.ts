// deno-lint-ignore-file require-await
import { Context } from "@/domain/context/context.interface.ts";
import userModel from "@/domain/user/model/user.model.ts";
import { resolvers } from "@/presentation/resolvers/index.ts";
import { typeDefs } from "@/presentation/typedefs/index.ts";
import { load } from "https://deno.land/std@0.197.0/dotenv/mod.ts";
import { startStandaloneServer } from "npm:@apollo/server@4.1/standalone";
import { ApolloServer } from "npm:@apollo/server@^4.1";
import mongoose from "npm:mongoose@^6.7";

const env = await load();

const PORT = env["PORT"] ?? 8000;
const DB_URL = env["DB_URL"] ?? "";

await mongoose.connect(DB_URL);

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
  context: async () => {
    return { userModel };
  },
});

console.log(`Server running on: ${url}`);