import { RepositoryException } from "@/domain/exceptions/repository-exception/index.ts";
import userModel from "@/domain/user/mongo/model/user.model.ts";
import { UserRepository } from "@/domain/user/repository/user.repository.ts";
import { UserInput } from "@/domain/user/types/index.ts";

class UserRepositoryNoSql implements UserRepository {
  async create(userInput: UserInput) {
    try {
      const { name, email, createdAt, updatedAt } = await userModel.create(
        userInput
      );

      return {
        name,
        email,
        createdAt,
        updatedAt,
      };
    } catch (err) {
      throw new RepositoryException(err?.message ?? "Internal server error");
    }
  }
}

export default new UserRepositoryNoSql();
