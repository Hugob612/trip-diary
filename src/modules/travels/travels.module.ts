import { Module } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { TravelsController } from './travels.controller';
import { PrismaService } from '../../database/PrismaService';

@Module({
  controllers: [TravelsController],
  providers: [TravelsService, PrismaService],
})
export class TravelsModule {}
