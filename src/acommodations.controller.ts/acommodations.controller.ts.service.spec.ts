import { Test, TestingModule } from '@nestjs/testing';
import { AcommodationsControllerTsService } from './acommodations.controller.ts.service';

describe('AcommodationsControllerTsService', () => {
  let service: AcommodationsControllerTsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcommodationsControllerTsService],
    }).compile();

    service = module.get<AcommodationsControllerTsService>(AcommodationsControllerTsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
