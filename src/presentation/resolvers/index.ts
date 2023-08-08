import { rootResolvers } from "@/presentation/resolvers/root/root.resolvers.ts";
import { userResolvers } from "@/presentation/resolvers/user/user.resolvers.ts";

export const resolvers = {
  Query: {
    ...rootResolvers.Query,
  },
  Mutation: {
    ...rootResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};
