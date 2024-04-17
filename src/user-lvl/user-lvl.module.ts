import { Module } from '@nestjs/common';
import { UserLvlService } from './user-lvl.service';
import { UserLvlController } from './user-lvl.controller';

@Module({
  controllers: [UserLvlController],
  providers: [UserLvlService],
})
export class UserLvlModule {}
