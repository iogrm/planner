import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePlaceInput } from './dto/create-place.input';
import { UpdatePlaceInput } from './dto/update-place.input';
import { PlaceOutput } from './dto/place.output';
import { PlaceService } from './place.service';

@Resolver(() => PlaceOutput)
export class PlaceResolver {
  constructor(private readonly placeService: PlaceService) {}

  @Mutation(() => PlaceOutput)
  async createPlace(
    @Args('createPlaceInput') createPlaceInput: CreatePlaceInput,
  ): Promise<PlaceOutput> {
    return await this.placeService.create(createPlaceInput);
  }

  @Query(() => [PlaceOutput], { name: 'places' })
  findAll() {
    return this.placeService.findAll();
  }

  @Query(() => PlaceOutput, { name: 'place' })
  findOne(@Args('id') id: string) {
    return this.placeService.findOne(id);
  }

  @Mutation(() => PlaceOutput)
  updatePlace(@Args('updatePlaceInput') updatePlaceInput: UpdatePlaceInput) {
    return this.placeService.update(updatePlaceInput);
  }

  @Mutation(() => Boolean)
  removePlace(@Args('id') id: string) {
    return this.placeService.remove(id);
  }
}
