import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBalanceDto } from './create-user-balance.dto';

export class UpdateUserBalanceDto extends PartialType(CreateUserBalanceDto) {}
