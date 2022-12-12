import { Injectable } from '@nestjs/common';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';
import { v1 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Place } from './entities/place.entity';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
  ) {}

  create(createPlaceInput: CreatePlaceInput) {
    const place: Place = { ...createPlaceInput, id: uuid() };
    const newPlace = this.placeRepository.create(place);
    return this.placeRepository.save(newPlace);
  }

  findAll(): Promise<Place[]> {
    return this.placeRepository.find();
  }

  findOne(id: string): Promise<Place> {
    return this.placeRepository.findOneBy({ id });
  }

  async update(updatePlaceInput: UpdatePlaceInput) {
    const place = await this.placeRepository.findOneBy({
      id: updatePlaceInput.id,
    });
    place.title = updatePlaceInput.title;
    place.country = updatePlaceInput.country;
  }

  remove(id: string) {
    return this.placeRepository.delete(id);
  }
}
