import { Injectable } from "@nestjs/common";
import { Collection } from "@prisma/client";
import { PrismaService } from "../common/prisma.service";

@Injectable()
export class CollectionsService {
  constructor(private readonly prisma: PrismaService) {}

  retrieveUserCollections(userId: number): Promise<Collection[]> {
    return this.prisma.collection.findMany({
      where: {
        userId,
      },
    });
  }
}
