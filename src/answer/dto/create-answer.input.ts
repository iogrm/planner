import { InputType, Int, Field } from '@nestjs/graphql';
import { QuestionOutput } from 'src/question/dto/question.output';
import { Question } from 'src/question/entities/question.entity';

@InputType()
export class CreateAnswerInput {
  @Field(() => Int)
  questionId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  percentage: number;
}
