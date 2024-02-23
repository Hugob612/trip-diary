import { Injectable } from '@nestjs/common';
import { TravelDTO } from './travel.dto';
import { PrismaService } from 'src/database/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class TravelService {

  constructor(private prisma: PrismaService) {}

  async create(data: TravelDTO) {
    const travelExists = await this.prisma.travel.findFirst({
      where: {
        id: data.id,
      },
    });

    if (travelExists) {
      throw new Error('Travel already exists');
    }

    const _data = {
      date: data.date,
      destiny: data.destiny,
      recommendation: data.recommendation,
      avaluation: data.avaluation,
      notes: data.notes,
    } as Prisma.TravelCreateInput;

    return await this.prisma.travel.create({ data: _data });

  }
  async findAll() {
    return this.prisma.travel.findMany();
  }

  async update(id: number, data: TravelDTO) {
    const travelExists = await this.prisma.travel.findFirst({
      where: { id },
    });

    if (!travelExists) {
      throw new Error('Travel not found');
    }

    const _data = {
      date: data.date,
      destiny: data.destiny,
      recommendation: data.recommendation,
      avaluation: data.avaluation,
      notes: data.notes,
    } as Prisma.TravelUpdateInput;

    return await this.prisma.travel.update({
      data: _data,
      where: { id: data.id },
    });
  }

  async delete(id: number) {
    const travelExists = await this.prisma.travel.findFirst({
      where: { id },
    });

    if (!travelExists) {
      throw new Error('Travel not found');
    }

    return await this.prisma.travel.delete({
      where: { id },
    });
  }
}
