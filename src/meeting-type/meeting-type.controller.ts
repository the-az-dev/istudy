import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeetingTypeService } from './meeting-type.service';
import { CreateMeetingTypeDto } from './dto/create-meeting-type.dto';
import { UpdateMeetingTypeDto } from './dto/update-meeting-type.dto';

@Controller('meeting-type')
export class MeetingTypeController {
  constructor(private readonly meetingTypeService: MeetingTypeService) {}

  @Post()
  create(@Body() createMeetingTypeDto: CreateMeetingTypeDto) {
    return this.meetingTypeService.create(createMeetingTypeDto);
  }

  @Get()
  findAll() {
    return this.meetingTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meetingTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeetingTypeDto: UpdateMeetingTypeDto) {
    return this.meetingTypeService.update(+id, updateMeetingTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetingTypeService.remove(+id);
  }
}
