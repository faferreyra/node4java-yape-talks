import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LoginUser, UserWithToken } from "src/common/types";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";

@ApiTags("security")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard("local"))
  @Post("auth/login")
  @ApiResponse({
    status: 201,
    description: "El usuario fue validado correctamente",
  })
  @ApiResponse({
    status: 401,
    description: "El email o contraseña provistos no son correctos",
  })
  @ApiBody({
    schema: {
      allOf: [
        {
          properties: {
            username: {
              type: "string",
            },
            password: {
              type: "string",
            },
          },
        },
      ],
    },
  })
  async login(
    @Body() user: LoginUser,
    @Request() request: Express.Request,
  ): Promise<UserWithToken> {
    return this.authService.login(request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  async getProfile(
    @Request() request: Express.Request,
  ): Promise<UserWithToken> {
    return <UserWithToken>request.user;
  }
}
