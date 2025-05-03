import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];
  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const newBrand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: Date.now(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let existsBrand = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id == id) {
        existsBrand = {
          ...brand,
          updateAt: Date.now(),
          name: updateBrandDto.name.toLocaleLowerCase(),
        };
        return {
          ...existsBrand,
          name: updateBrandDto.name.toLocaleLowerCase(),
        };
      }
      return brand;
    });
    return existsBrand;
  }

  remove(id: string) {
    const brand = this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return brand;
  }

  populateBrands(brands: Brand[]) {
    this.brands = brands;
  }
}
