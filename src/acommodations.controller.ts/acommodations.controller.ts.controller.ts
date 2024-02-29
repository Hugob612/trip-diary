import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcommodationsControllerTsService } from './acommodations.controller.ts.service';
import { CreateAcommodationsControllerTDto } from './dto/create-acommodations.controller.t.dto';
import { UpdateAcommodationsControllerTDto } from './dto/update-acommodations.controller.t.dto';

@Controller('acommodations.controller.ts')
export class AcommodationsControllerTsController {
  constructor(private readonly acommodationsControllerTsService: AcommodationsControllerTsService) {}

  @Post()
  create(@Body() createAcommodationsControllerTDto: CreateAcommodationsControllerTDto) {
    return this.acommodationsControllerTsService.create(createAcommodationsControllerTDto);
  }

  @Get()
  findAll() {
    return this.acommodationsControllerTsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acommodationsControllerTsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcommodationsControllerTDto: UpdateAcommodationsControllerTDto) {
    return this.acommodationsControllerTsService.update(+id, updateAcommodationsControllerTDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acommodationsControllerTsService.remove(+id);
  }
}
