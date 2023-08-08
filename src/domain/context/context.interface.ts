import userModel from "@/domain/user/model/user.model.ts";

export interface Context {
  userModel: typeof userModel;
}
