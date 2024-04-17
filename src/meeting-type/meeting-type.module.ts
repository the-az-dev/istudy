import { Module } from '@nestjs/common';
import { MeetingTypeService } from './meeting-type.service';
import { MeetingTypeController } from './meeting-type.controller';

@Module({
  controllers: [MeetingTypeController],
  providers: [MeetingTypeService],
})
export class MeetingTypeModule {}
