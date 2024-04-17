import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserLvlService } from './user-lvl.service';
import { CreateUserLvlDto } from './dto/create-user-lvl.dto';
import { UpdateUserLvlDto } from './dto/update-user-lvl.dto';

@Controller('user-lvl')
export class UserLvlController {
  constructor(private readonly userLvlService: UserLvlService) {}

  @Post()
  create(@Body() createUserLvlDto: CreateUserLvlDto) {
    return this.userLvlService.create(createUserLvlDto);
  }

  @Get()
  findAll() {
    return this.userLvlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userLvlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserLvlDto: UpdateUserLvlDto) {
    return this.userLvlService.update(+id, updateUserLvlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userLvlService.remove(+id);
  }
}
