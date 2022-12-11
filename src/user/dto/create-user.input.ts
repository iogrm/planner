import { NumberString } from 'src/type/number_string';
import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @Field(() => String)
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  nationalId: NumberString;
}
