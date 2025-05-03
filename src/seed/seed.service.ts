import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

import { CARS_SEED, BRAND_SEED } from './data';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDb() {
    this.carsService.populateCars(CARS_SEED);
    this.brandsService.populateBrands(BRAND_SEED);

    return 'Seed executed';
  }
}
