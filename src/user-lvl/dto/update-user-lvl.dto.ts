import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLvlDto } from './create-user-lvl.dto';

export class UpdateUserLvlDto extends PartialType(CreateUserLvlDto) {}
