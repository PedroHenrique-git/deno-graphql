import { UserRepository } from "@/domain/user/repository/user.repository.ts";

export interface Context {
  userRepository: UserRepository;
}
