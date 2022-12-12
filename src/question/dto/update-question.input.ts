import { CreateQuestionInput } from './create-question.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  text: string;

  @Field(() => String)
  traitPlus: traits;

  @Field(() => String)
  traitMinus: traits;
}
