import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

const db = [
  {
    id:1,
    name:'HP',
  },
  {
    id:2,
    name:'DELL',
  },
  {
    id:3,
    name:'Asus',
  },
  {
    id:2,
    name:'Acer',
  }
];
@Injectable()
export class BrandsService {
  create(createBrandDto: CreateBrandDto) {
    return 'This action adds a new brand';
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
