import { Module } from "@nestjs/common";
import { CommonModule } from "src/common/common.module";
import { UserService } from "./user.service";

@Module({
  controllers: [],
  exports: [UserService],
  imports: [CommonModule],
  providers: [UserService],
})
export class UsersModule {}
