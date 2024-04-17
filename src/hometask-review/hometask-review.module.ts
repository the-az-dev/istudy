import { Module } from '@nestjs/common';
import { HometaskReviewService } from './hometask-review.service';
import { HometaskReviewController } from './hometask-review.controller';

@Module({
  controllers: [HometaskReviewController],
  providers: [HometaskReviewService],
})
export class HometaskReviewModule {}
