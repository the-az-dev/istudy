import { Injectable } from '@nestjs/common';
import { CreateUserLvlDto } from './dto/create-user-lvl.dto';
import { UpdateUserLvlDto } from './dto/update-user-lvl.dto';

@Injectable()
export class UserLvlService {
  create(createUserLvlDto: CreateUserLvlDto) {
    return 'This action adds a new userLvl';
  }

  findAll() {
    return `This action returns all userLvl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userLvl`;
  }

  update(id: number, updateUserLvlDto: UpdateUserLvlDto) {
    return `This action updates a #${id} userLvl`;
  }

  remove(id: number) {
    return `This action removes a #${id} userLvl`;
  }
}
