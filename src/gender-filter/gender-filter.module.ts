import { Module } from '@nestjs/common';
import { GenderFilterService } from './gender-filter.service';
import { GenderFilterController } from './gender-filter.controller';

@Module({
  controllers: [GenderFilterController],
  providers: [GenderFilterService],
})
export class GenderFilterModule {}
