import { InputType, Int, Field } from '@nestjs/graphql';
import { TraitScalar } from 'src/scalar/trait.scalar';
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
