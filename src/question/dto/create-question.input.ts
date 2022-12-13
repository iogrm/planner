import { Field, InputType } from '@nestjs/graphql';
import { Trait } from 'src/type/trait_string';

@InputType()
export class CreateQuestionInput {
  @Field(() => String)
  text: string;

  @Field(() => Trait)
  traitPlus: Trait;

  @Field(() => Trait)
  traitMinus: Trait;
}
