import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class QuestionOutput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  text: string;

  @Field(() => String)
  traitPlus: traits;

  @Field(() => String)
  traitMinus: traits;
}
