import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Trait } from 'src/type/trait_string';
import { Entity } from 'typeorm';

@ObjectType()
export class QuestionOutput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  text: string;

  @Field(() => String)
  traitPlus: Trait;

  @Field(() => String)
  traitMinus: Trait;
}
