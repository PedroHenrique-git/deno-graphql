import { User, UserInput } from "@/domain/user/types/index.ts";

export interface UserRepository {
  create(userInput: UserInput): Promise<User>;
}
