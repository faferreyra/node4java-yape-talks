import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserWithToken } from "src/common/types";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly auth: AuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<UserWithToken> {
    const user = await this.auth.validate(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
