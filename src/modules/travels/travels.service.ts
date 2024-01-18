import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TravelDTO } from './travel.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class TravelService {
  contructor( private prisma: PrismaService) {}

  async create(data: TravelDTO) {
    this.prisma}
}
