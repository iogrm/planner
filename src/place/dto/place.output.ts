import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Place {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  country: string;
}
