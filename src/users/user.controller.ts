import { Controller, Request } from "@nestjs/common";
import { UserWithToken } from "src/common/types";

@Controller()
export class UserController {
  async me(@Request() request: Express.Request): Promise<UserWithToken> {
    return <UserWithToken>request.user;
  }
}
