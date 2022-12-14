export type Mbti = Mbti.Mbti;
export namespace Mbti {
  const symbol = Symbol();
  export type Mbti = string & { [symbol]: typeof symbol };

  export const refinement = (str: string): str is Mbti => isMbti(str);
  export const mk = (str: string) => (refinement(str) ? str : undefined);
  export const mkUnsafe = (str: string) => str as Mbti;
}
const traits = [
  ['i', 'e', 'x'],
  ['n', 's', 'x'],
  ['t', 'f', 'x'],
  ['p', 'j', 'x'],
];

const MBTI_TYPE = [];
traits[0].forEach((trait1) => {
  traits[1].forEach((trait2) => {
    traits[2].forEach((trait3) => {
      traits[3].forEach((trait4) => {
        MBTI_TYPE.push(trait1 + trait2 + trait3 + trait4);
      });
    });
  });
});

// const mbtis = [
//   'intj',
//   'intp',
//   'infj',
//   'infp',
//   'istj',
//   'istp',
//   'isfj',
//   'isfp',
//   'entj',
//   'entp',
//   'enfj',
//   'enfp',
//   'estj',
//   'estp',
//   'esfj',
//   'esfp',
// ];

type mbti = `${'i' | 'e'}${'n' | 's'}${'t' | 'f'}${'p' | 'j'}`;

function isMbti(str: string): boolean {
  return MBTI_TYPE.includes(str);
}
