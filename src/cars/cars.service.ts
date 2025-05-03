import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as UUID } from 'uuid'; // Import UUID from uuid package
import { CreateCarDto } from './dto/create-card.dto';
import { UpdateCarDto } from './dto/update-card.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
   
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return this.cars.find((car) => car.id === id);
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: UUID(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findOneById(id);

    if (updateCarDto.id && id !== updateCarDto.id)
      throw new NotFoundException(`Car with id ${id} not found`);

    // Limpio los undefined
    Object.keys(updateCarDto).forEach((key) => {
      if (updateCarDto[key] === undefined) delete updateCarDto[key];
    });

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        console.log('carDb', carDb);
        console.log('updateCarDto', updateCarDto);
        carDb = { ...carDb, ...updateCarDto, id };
        return carDb;
      }
      return car;
    });

    console.log('carDb', carDb);

    return carDb;
  }

  delete(id: string) {
    const car = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }

  populateCars(cars:Car[]) {
    this.cars = cars
  }
}
