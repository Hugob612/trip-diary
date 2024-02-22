import { Module } from '@nestjs/common';
import { TravelService } from './travels.service';
import { TravelsController } from './travels.controller';
import { PrismaService } from '../../database/PrismaService';

@Module({
  controllers: [TravelsController],
  providers: [TravelService, PrismaService],
})
export class TravelsModule {}
