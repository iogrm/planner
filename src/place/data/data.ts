import { Place } from '../entities/place.entity';

export let places: Place[] = [
  { id: '1', title: 'mashhad', country: 'iran' },
  { id: '2', title: 'london', country: 'england' },
  { id: '3', title: 'madrid', country: 'spain' },
  { id: '4', title: 'washington', country: 'usa' },
  { id: '5', title: 'shanghai', country: 'china' },
];

export class PlaceTable {
  static deletePlace = (id: string) => {
    places = places.filter((place) => place.id !== id);
  };
}
