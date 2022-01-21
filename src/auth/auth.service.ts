import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserWithToken } from "src/common/types";
import { UserService } from "../users/user.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(
    email: string,
    password: string,
  ): Promise<UserWithToken | null> {
    const user = await this.userService.user({
      email: email,
    });

    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...secure } = user;
      return {
        ...secure,
        token: "abc",
      };
    }
    return null;
  }

  async login(user: any): Promise<UserWithToken> {
    const payload = { username: user.email, sub: user.id };
    return {
      ...user,
      token: this.jwtService.sign(payload),
    };
  }
}
