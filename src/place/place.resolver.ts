import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlaceService } from './place.service';
import { Place } from './entities/place.entity';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';

@Resolver(() => Place)
export class PlaceResolver {
  constructor(private readonly placeService: PlaceService) {}

  @Mutation(() => Place)
  createPlace(
    @Args('createPlaceInput') createPlaceInput: CreatePlaceInput,
  ): Place {
    return this.placeService.create(createPlaceInput);
  }

  @Query(() => [Place], { name: 'places' })
  findAll() {
    return this.placeService.findAll();
  }

  @Query(() => Place, { name: 'place' })
  findOne(@Args('id') id: string) {
    return this.placeService.findOne(id);
  }

  @Mutation(() => Place)
  updatePlace(@Args('updatePlaceInput') updatePlaceInput: UpdatePlaceInput) {
    return this.placeService.update(updatePlaceInput.id, updatePlaceInput);
  }

  @Mutation(() => Boolean)
  removePlace(@Args('id') id: string) {
    return this.placeService.remove(id);
  }
}
