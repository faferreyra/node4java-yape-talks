import { Test, TestingModule } from "@nestjs/testing";
import { CollectionsController } from "./collections.controller";
import { CollectionsService } from "./collections.service";

describe("CollectionsController", () => {
  let controller: CollectionsController;
  let serviceMock: CollectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionsController],
      providers: [
        {
          provide: CollectionsService,
          useValue: {
            retrieveUserCollections: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CollectionsController>(CollectionsController);
    serviceMock = module.get<CollectionsService>(CollectionsService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should retrieve user collections", () => {
    const request = {
      user: {
        id: 1,
      },
    };

    const result = controller.retrieveUserCollections(request);

    expect(result).not.toBeNull();

    expect(serviceMock.retrieveUserCollections).toHaveBeenCalled();
    expect(serviceMock.retrieveUserCollections).toHaveBeenCalledWith(1);
  });
});
