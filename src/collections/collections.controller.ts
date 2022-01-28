import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CollectionsService } from "./collections.service";

@Controller("collections")
export class CollectionsController {

  constructor(private readonly collections: CollectionsService) {

  }

  @UseGuards(JwtAuthGuard)
  @Get()
  retrieveUserCollections(@Request() request: any) {
    return this.collections.retrieveUserCollections(request.user.id);
  }
}
