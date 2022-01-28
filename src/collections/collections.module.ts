import { Module } from "@nestjs/common";
import { CommonModule } from "src/common/common.module";
import { CollectionsController } from "./collections.controller";
import { CollectionsService } from "./collections.service";

@Module({
  controllers: [CollectionsController],
  imports: [CommonModule],
  providers: [CollectionsService],
})
export class CollectionsModule {}
