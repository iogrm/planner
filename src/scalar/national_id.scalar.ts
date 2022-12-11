import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { NumberString } from 'src/type/number_string';

@Scalar('MyNumberString', () => NumberString)
export class NumberStringScalar implements CustomScalar<string, NumberString> {
  description = 'NumberString custom scalar type';

  parseValue(value: string): NumberString {
    return NumberString.mk(value);
  }

  serialize(value: NumberString): string {
    return NumberString.mkUnsafe(value);
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return NumberString.mk(ast.value);
    }
    throw new Error('');
  }
}
