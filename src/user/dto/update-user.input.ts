import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { NumberString } from 'src/type/number_string';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  id: number;

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
