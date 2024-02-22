import {
  Body,
  Get,
  Controller,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TravelService } from './travels.service';
import { TravelDTO } from './travel.dto';

@Controller('travels')
export class TravelsController {
  constructor(private readonly travelsService: TravelService) {}

  @Post()
  async create(@Body() data: TravelDTO) {
    return this.travelsService.create(data);
  }
  @Get()
  async findAll() {
    return this.travelsService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: TravelDTO) {
    return this.travelsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.travelsService.delete(id);
  }
}
