import { PlaceTable, places } from './data/data';
import { Place } from './entities/place.entity';
import { Injectable } from '@nestjs/common';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';
import { v1 as uuid } from 'uuid';

@Injectable()
export class PlaceService {
  create(createPlaceInput: CreatePlaceInput): Place {
    const newPlace = new Place();
    newPlace.id = uuid();
    newPlace.title = createPlaceInput.title;
    newPlace.country = createPlaceInput.country;
    places.push(newPlace);
    return newPlace;
  }

  findAll(): Place[] {
    return places;
  }

  findOne(id: String): Place {
    const place = places.find((place) => place.id === id);
    return place;
  }

  update(id: string, updatePlaceInput: UpdatePlaceInput) {
    const place = places.find((place) => place.id === id);
    place.title = updatePlaceInput.title;
    place.country = updatePlaceInput.country;
    places.push(place);
    return place;
  }

  remove(id: string): Boolean {
    PlaceTable.deletePlace(id);
    return true;
  }
}
