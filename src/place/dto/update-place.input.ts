import { CreatePlaceInput } from './create-place.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlaceInput extends PartialType(CreatePlaceInput) {
  @Field(() => String)
  id: string;
  @Field(() => String)
  title: string;
  @Field(() => String)
  country: string;
}
