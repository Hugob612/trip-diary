import { Injectable } from '@nestjs/common';
import { CreateAcommodationsControllerTDto } from './dto/create-acommodations.controller.t.dto';
import { UpdateAcommodationsControllerTDto } from './dto/update-acommodations.controller.t.dto';

@Injectable()
export class AcommodationsControllerTsService {
  create(createAcommodationsControllerTDto: CreateAcommodationsControllerTDto) {
    return 'This action adds a new acommodationsControllerT';
  }

  findAll() {
    return `This action returns all acommodationsControllerTs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} acommodationsControllerT`;
  }

  update(id: number, updateAcommodationsControllerTDto: UpdateAcommodationsControllerTDto) {
    return `This action updates a #${id} acommodationsControllerT`;
  }

  remove(id: number) {
    return `This action removes a #${id} acommodationsControllerT`;
  }
}
