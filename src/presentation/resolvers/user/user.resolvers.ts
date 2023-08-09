import { Context } from "@/domain/context/context.interface.ts";
import { UserInput } from "@/domain/user/types/index.ts";

export const userResolvers = {
  Mutation: {
    createUser: (
      _: unknown,
      { userInput }: { userInput: UserInput },
      { userRepository }: Context
    ) => {
      return userRepository.create({
        name: userInput.name,
        email: userInput.email,
      });
    },
  },
};
