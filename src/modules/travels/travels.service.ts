import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { TravelDTO } from './travel.dto';

@Injectable()
export class TravelsService {
  constructor(private prisma: PrismaService) {}

  async create(data: TravelDTO) {

    const travelExists = await this.prisma.travel.findFirst({
        where: {
            id: data.id
        }
    })

    if (travelExists) {
        throw new Error('Travel already exists')
    }

    const travel = await this.prisma.travel.create({
      data,
    });

    return travel;
  }
}
