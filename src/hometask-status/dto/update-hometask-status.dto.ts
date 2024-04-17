import { PartialType } from '@nestjs/mapped-types';
import { CreateHometaskStatusDto } from './create-hometask-status.dto';

export class UpdateHometaskStatusDto extends PartialType(CreateHometaskStatusDto) {}
