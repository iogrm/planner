import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlaceInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  country: string;
}
