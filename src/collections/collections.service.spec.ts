import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../common/prisma.service";
import { CollectionsService } from "./collections.service";

describe("CollectionsService", () => {
  let service: CollectionsService;
  const prismaServiceMock = {
    collection: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CollectionsService,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    service = module.get<CollectionsService>(CollectionsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("retrieveUserCollections suite", () => {
    it("should retrieve user collections", async () => {
      const userid = 1;

      prismaServiceMock.collection.findMany.mockReturnValue([{ id: 1 }, {}]);

      const result = await service.retrieveUserCollections(userid);
      expect(result).not.toBeNull();
      expect(result).toBeInstanceOf(Array);
      expect(result.length > 0).toBeTruthy();
    });

    it("should retrieve user no collections for a user", async () => {
      const userid = 2;

      prismaServiceMock.collection.findMany.mockReturnValue([]);

      const result = await service.retrieveUserCollections(userid);

      expect(result).not.toBeNull();
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toEqual(0);

      expect(prismaServiceMock.collection.findMany).toHaveBeenCalled();
      expect(prismaServiceMock.collection.findMany).toHaveBeenCalledWith({
        where: {
          userId: 2,
        },
      });
    });
  });
});
