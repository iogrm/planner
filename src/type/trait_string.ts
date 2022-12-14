export type Trait = Trait.Trait;

const traits = ['i', 'e', 'n', 's', 't', 'f', 'j', 'p'];

export namespace Trait {
  const symbol = Symbol();
  export type Trait = string & { [symbol]: typeof symbol };
  export const refinement = (str: string): str is Trait => traits.includes(str);
  export const mk = (str: string) => (refinement(str) ? str : undefined);
  export const mkUnsafe = (str: string) => str as Trait;
}

export const mbtiTypeDefs = `enum UserRole { ${traits.join(' ')} }`;
