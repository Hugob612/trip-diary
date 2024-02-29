import { Test, TestingModule } from '@nestjs/testing';
import { AcommodationsControllerTsController } from './acommodations.controller.ts.controller';
import { AcommodationsControllerTsService } from './acommodations.controller.ts.service';

describe('AcommodationsControllerTsController', () => {
  let controller: AcommodationsControllerTsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcommodationsControllerTsController],
      providers: [AcommodationsControllerTsService],
    }).compile();

    controller = module.get<AcommodationsControllerTsController>(AcommodationsControllerTsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
