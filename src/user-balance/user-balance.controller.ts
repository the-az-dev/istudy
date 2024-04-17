import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserBalanceService } from './user-balance.service';
import { CreateUserBalanceDto } from './dto/create-user-balance.dto';
import { UpdateUserBalanceDto } from './dto/update-user-balance.dto';

@Controller('user-balance')
export class UserBalanceController {
  constructor(private readonly userBalanceService: UserBalanceService) {}

  @Post()
  create(@Body() createUserBalanceDto: CreateUserBalanceDto) {
    return this.userBalanceService.create(createUserBalanceDto);
  }

  @Get()
  findAll() {
    return this.userBalanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBalanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserBalanceDto: UpdateUserBalanceDto) {
    return this.userBalanceService.update(+id, updateUserBalanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userBalanceService.remove(+id);
  }
}
