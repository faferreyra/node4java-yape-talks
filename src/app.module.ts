import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { CollectionsModule } from "./collections/collections.module";

@Module({
  imports: [UsersModule, AuthModule, ConfigModule.forRoot(), CollectionsModule],
})
export class AppModule {}
