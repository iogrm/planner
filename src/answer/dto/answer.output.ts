import { QuestionOutput } from './../../question/dto/question.output';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Question } from 'src/question/entities/question.entity';

@ObjectType()
export class AnswerOutput {
  @Field(() => Int)
  id: number;

  @Field(() => QuestionOutput)
  question: QuestionOutput;

  @Field(() => Int)
  questionId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  percentage: number;
}
