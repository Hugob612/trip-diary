import { Module } from '@nestjs/common';
import { AcommodationsControllerTsService } from './acommodations.controller.ts.service';
import { AcommodationsControllerTsController } from './acommodations.controller.ts.controller';

@Module({
  controllers: [AcommodationsControllerTsController],
  providers: [AcommodationsControllerTsService],
})
export class AcommodationsControllerTsModule {}
