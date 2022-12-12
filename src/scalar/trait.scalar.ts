import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { Trait } from 'src/type/trait_string';

@Scalar('Trait', () => Trait)
export class TraitScalar implements CustomScalar<string, Trait> {
  description = 'Trait custom scalar type';

  parseValue(value: string): Trait {
    return Trait.mk(value);
  }

  serialize(value: Trait): string {
    return Trait.mkUnsafe(value);
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return Trait.mk(ast.value);
    }
    throw new Error('');
  }
}
