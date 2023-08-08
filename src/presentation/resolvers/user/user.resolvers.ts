import { Context } from "@/domain/context/context.interface.ts";

export const userResolvers = {
  Mutation: {
    createUser: (
      _: unknown,
      { userInput }: { userInput: { name: string; email: string } },
      { userModel }: Context
    ) => {
      return userModel.create({
        name: userInput.name,
        email: userInput.email,
      });
    },
  },
};
