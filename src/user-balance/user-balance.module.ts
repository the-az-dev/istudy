import { Module } from '@nestjs/common';
import { UserBalanceService } from './user-balance.service';
import { UserBalanceController } from './user-balance.controller';

@Module({
  controllers: [UserBalanceController],
  providers: [UserBalanceService],
})
export class UserBalanceModule {}
