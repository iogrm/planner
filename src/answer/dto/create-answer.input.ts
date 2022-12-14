import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateAnswerInput {
  @Field(() => Int)
  questionId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  percentage: number;
}
