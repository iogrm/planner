import { Field, ObjectType } from '@nestjs/graphql';
import { NumberString } from 'src/type/number_string';

@ObjectType()
export class UserOutput {
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

  @Field({ nullable: true })
  mbti: string;
}
