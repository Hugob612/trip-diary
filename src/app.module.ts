import { Module } from '@nestjs/common';
import { TravelsModule } from './modules/travels/travels.module';
import { AcommodationsControllerTsModule } from './acommodations.controller.ts/acommodations.controller.ts.module';

@Module({
  imports: [TravelsModule, AcommodationsControllerTsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
