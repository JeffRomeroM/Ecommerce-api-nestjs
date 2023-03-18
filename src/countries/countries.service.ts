import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

const db = [
  {
    id:1,
    name:'Nicaragua',
  },
  {
    id:2,
    name:'Panama',
  },
  {
    id:3,
    name:'Contactos',
  },
  {
    id:4,
    name:'Cuenta',
  }
];

@Injectable()
export class CountriesService {
  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
