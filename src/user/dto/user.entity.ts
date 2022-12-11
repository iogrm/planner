import { ObjectType, Field, Int } from '@nestjs/graphql';
import { NumberString } from 'src/type/number_string';

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  nationalId: NumberString;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;
}
