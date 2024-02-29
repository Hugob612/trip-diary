import { PartialType } from '@nestjs/mapped-types';
import { CreateAcommodationsControllerTDto } from './create-acommodations.controller.t.dto';

export class UpdateAcommodationsControllerTDto extends PartialType(CreateAcommodationsControllerTDto) {}
