export type Mbti = Mbti.Mbti;
export namespace Mbti {
  const symbol = Symbol();
  export type Mbti = string & { [symbol]: typeof symbol };

  export const refinement = (str: string): str is Mbti => isMbti(str);
  export const mk = (str: string) => (refinement(str) ? str : undefined);
  export const mkUnsafe = (str: string) => str as Mbti;
}
const mbtis = [
  'intj',
  'intp',
  'infj',
  'infp',
  'istj',
  'istp',
  'isfj',
  'isfp',
  'entj',
  'entp',
  'enfj',
  'enfp',
  'estj',
  'estp',
  'esfj',
  'esfp',
];
function isMbti(str: string): boolean {
  return mbtis.includes(str);
}
