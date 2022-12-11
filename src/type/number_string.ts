export type NumberString = NumberString.NumberString;
export namespace NumberString {
  const symbol = Symbol();
  export type NumberString = string & { [symbol]: typeof symbol };

  export const refinement = (str: string): str is NumberString =>
    !isNaN(parseInt(str));
  export const mk = (str: string) => (refinement(str) ? str : undefined);
  export const mkUnsafe = (str: string) => str as NumberString;
}
