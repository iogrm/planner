import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuestionInput {
  @Field(() => String)
  text: string;

  @Field(() => String)
  traitPlus: traits;

  @Field(() => String)
  traitMinus: traits;
}
