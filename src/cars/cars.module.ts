import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService], // Export CarsService to be used in other modules
})
export class CarsModule {}
