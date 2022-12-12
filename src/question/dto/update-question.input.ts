import { CreateQuestionInput } from './create-question.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Trait } from 'src/type/trait_string';

@InputType()
export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  text: string;

  @Field(() => Trait)
  traitPlus: Trait;

  @Field(() => Trait)
  traitMinus: Trait;
}
