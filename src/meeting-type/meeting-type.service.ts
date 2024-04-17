import { Injectable } from '@nestjs/common';
import { CreateMeetingTypeDto } from './dto/create-meeting-type.dto';
import { UpdateMeetingTypeDto } from './dto/update-meeting-type.dto';

@Injectable()
export class MeetingTypeService {
  create(createMeetingTypeDto: CreateMeetingTypeDto) {
    return 'This action adds a new meetingType';
  }

  findAll() {
    return `This action returns all meetingType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meetingType`;
  }

  update(id: number, updateMeetingTypeDto: UpdateMeetingTypeDto) {
    return `This action updates a #${id} meetingType`;
  }

  remove(id: number) {
    return `This action removes a #${id} meetingType`;
  }
}
