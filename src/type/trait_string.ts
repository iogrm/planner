export type Trait = Trait.Trait;
export namespace Trait {
  const symbol = Symbol();
  export type Trait = string & { [symbol]: typeof symbol };

  export const refinement = (str: string): str is Trait => isTrait(str);
  export const mk = (str: string) => (refinement(str) ? str : undefined);
  export const mkUnsafe = (str: string) => str as Trait;
}
const traits = ['i', 'e', 'n', 's', 't', 'f', 'j', 'p'];
function isTrait(str: string): boolean {
  return traits.includes(str);
}
