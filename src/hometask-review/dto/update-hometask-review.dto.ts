import { PartialType } from '@nestjs/mapped-types';
import { CreateHometaskReviewDto } from './create-hometask-review.dto';

export class UpdateHometaskReviewDto extends PartialType(CreateHometaskReviewDto) {}
