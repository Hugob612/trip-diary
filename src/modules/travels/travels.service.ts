import { Injectable } from '@nestjs/common';
import { TravelDTO } from './travel.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class TravelService {
  constructor(private prisma: PrismaService) { }

  async create(data: TravelDTO) {
    const travelExists = await this.prisma.travel.findFirst({
      where: {
        date: data.date,
        destiny: data.destiny,
      },
    });
    if (travelExists) {
      throw new Error('Travel already exists');
    }

    const travel = await this.prisma.travel.create({
      data,
    });
    return travel;
  }
  async findAll() {
    return this.prisma.travel.findMany();
  }

  async update(id: string, data: TravelDTO) {
    const travelExists = await this.prisma.travel.FindUnique({
      where: { id },
      data,
    });
    
    if (!travelExists) {
      throw new Error('Travel not found');
    }

   return await this.prisma.travel.update({
      data,
      where: { id },
    });
  }
}
