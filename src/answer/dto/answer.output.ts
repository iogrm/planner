import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserOutput } from 'src/user/dto/user.output';
import { QuestionOutput } from './../../question/dto/question.output';

@ObjectType()
export class AnswerOutput {
  @Field(() => Int)
  id: number;

  @Field(() => QuestionOutput)
  question: QuestionOutput;

  @Field(() => UserOutput)
  user: UserOutput;

  @Field(() => Int)
  percentage: number;

  @Field(() => String)
  time: string;

  @Field(() => String)
  mbti: string;
}
