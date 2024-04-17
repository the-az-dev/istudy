import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HometaskModule } from './hometask/hometask.module';
import { HometaskReviewModule } from './hometask-review/hometask-review.module';
import { HometaskStatusModule } from './hometask-status/hometask-status.module';
import { MeetingTypeModule } from './meeting-type/meeting-type.module';
import { ScheduleModule } from './schedule/schedule.module';
import { UserBalanceModule } from './user-balance/user-balance.module';
import { UserLvlModule } from './user-lvl/user-lvl.module';
@Module({
  imports: [AuthModule, UserModule, HometaskModule, HometaskReviewModule, HometaskStatusModule, MeetingTypeModule, ScheduleModule, UserBalanceModule, UserLvlModule],
  controllers: [AppController],
})
export class AppModule {}
