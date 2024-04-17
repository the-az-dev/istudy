import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HometaskReviewService } from './hometask-review.service';
import { CreateHometaskReviewDto } from './dto/create-hometask-review.dto';
import { UpdateHometaskReviewDto } from './dto/update-hometask-review.dto';

@Controller('hometask-review')
export class HometaskReviewController {
  constructor(private readonly hometaskReviewService: HometaskReviewService) {}

  @Post()
  create(@Body() createHometaskReviewDto: CreateHometaskReviewDto) {
    return this.hometaskReviewService.create(createHometaskReviewDto);
  }

  @Get()
  findAll() {
    return this.hometaskReviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hometaskReviewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHometaskReviewDto: UpdateHometaskReviewDto) {
    return this.hometaskReviewService.update(+id, updateHometaskReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hometaskReviewService.remove(+id);
  }
}
