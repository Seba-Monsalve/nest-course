import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'toyota',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'dahisatu',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'hyundai',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'honda',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'maserati',
    createdAt: Date.now(),
  },
];
