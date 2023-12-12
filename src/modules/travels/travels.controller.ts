import { Body, Controller, Post } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { TravelDTO } from './travel.dto';

@Controller('travels')
export class TravelsController {
  constructor(private readonly travelsService: TravelsService) {}

  @Post()
  async create(@Body() data: TravelDTO) {
    return this.travelsService.create(data);
  }
}
