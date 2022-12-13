import { CreateAnswerInput } from './create-answer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { QuestionOutput } from 'src/question/dto/question.output';
import { Question } from 'src/question/entities/question.entity';

@InputType()
export class UpdateAnswerInput extends PartialType(CreateAnswerInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  questionId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  percentage: number;
}
