import { Injectable } from '@nestjs/common';
import { CreateUserBalanceDto } from './dto/create-user-balance.dto';
import { UpdateUserBalanceDto } from './dto/update-user-balance.dto';

@Injectable()
export class UserBalanceService {
  create(createUserBalanceDto: CreateUserBalanceDto) {
    return 'This action adds a new userBalance';
  }

  findAll() {
    return `This action returns all userBalance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userBalance`;
  }

  update(id: number, updateUserBalanceDto: UpdateUserBalanceDto) {
    return `This action updates a #${id} userBalance`;
  }

  remove(id: number) {
    return `This action removes a #${id} userBalance`;
  }
}
