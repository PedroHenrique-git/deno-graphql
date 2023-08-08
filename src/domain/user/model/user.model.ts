import { User } from "@/domain/user/schema/user.schema.ts";
import { model } from "npm:mongoose@^6.7";

export default model("User", User);
