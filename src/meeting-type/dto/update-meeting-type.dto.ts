import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetingTypeDto } from './create-meeting-type.dto';

export class UpdateMeetingTypeDto extends PartialType(CreateMeetingTypeDto) {}
