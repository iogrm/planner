// type trait = { title: string; name: string; description: string };
// type i = { title: 'i'; name: 'Introversion'; description: '' };
// type e = { title: 'e'; name: 'Extroversion'; description: '' };
// type n = { title: 'n'; name: 'Intuition'; description: '' };
// type s = { title: 's'; name: 'Sensing'; description: '' };
// type t = { title: 't'; name: 'Thinking'; description: '' };
// type f = { title: 'f'; name: 'Feeling'; description: '' };
// type j = { title: 'j'; name: 'Judging'; description: '' };
// type p = { title: 'p'; name: 'Perceiving'; description: '' };

// enum trait1 {
//   i,
//   e,
// }
// enum trait2 {
//   n,
//   s,
// }
// enum trait3 {
//   t,
//   f,
// }
// enum trait4 {
//   j,
//   p,
// }
// type traits =
//   | trait1.e
//   | trait2.n
//   | trait3.f
//   | trait4.j
//   | trait1.i
//   | trait2.s
//   | trait3.t
//   | trait4.p;
// type mbti = { trait1: trait1; trait2: trait2; trait3: trait3; trait4: trait4 };
// const intj: mbti = {
//   trait1: trait1.i,
//   trait2: trait2.n,
//   trait3: trait3.t,
//   trait4: trait4.j,
// };
// const intp: mbti = {
//   trait1: trait1.i,
//   trait2: trait2.n,
//   trait3: trait3.t,
//   trait4: trait4.p,
// };
// const infj: mbti = {
//   trait1: trait1.i,
//   trait2: trait2.n,
//   trait3: trait3.f,
//   trait4: trait4.j,
// };
// const infp: mbti = {
//   trait1: trait1.i,
//   trait2: trait2.n,
//   trait3: trait3.f,
//   trait4: trait4.p,
// };
// const istj: mbti = {
//   trait1: trait1.i,
//   trait2: trait2.s,
//   trait3: trait3.t,
//   trait4: trait4.j,
// };
// const istp: mbti = {
//   trait1: trait1.i,
//   trait2: trait2.s,
//   trait3: trait3.t,
//   trait4: trait4.p,
// };
// const isfj: mbti = {
//   trait1: trait1.i,
//   trait2: trait2.s,
//   trait3: trait3.f,
//   trait4: trait4.j,
// };
// const isfp: mbti = {
//   trait1: trait1.i,
//   trait2: trait2.s,
//   trait3: trait3.f,
//   trait4: trait4.p,
// };
// const esfj: mbti = {
//   trait1: trait1.e,
//   trait2: trait2.s,
//   trait3: trait3.f,
//   trait4: trait4.j,
// };
// const esfp: mbti = {
//   trait1: trait1.e,
//   trait2: trait2.s,
//   trait3: trait3.f,
//   trait4: trait4.p,
// };
// const estj: mbti = {
//   trait1: trait1.e,
//   trait2: trait2.s,
//   trait3: trait3.t,
//   trait4: trait4.j,
// };
// const estp: mbti = {
//   trait1: trait1.e,
//   trait2: trait2.s,
//   trait3: trait3.t,
//   trait4: trait4.p,
// };
// const enfj: mbti = {
//   trait1: trait1.e,
//   trait2: trait2.n,
//   trait3: trait3.f,
//   trait4: trait4.j,
// };
// const enfp: mbti = {
//   trait1: trait1.e,
//   trait2: trait2.n,
//   trait3: trait3.f,
//   trait4: trait4.p,
// };
// const entj: mbti = {
//   trait1: trait1.e,
//   trait2: trait2.n,
//   trait3: trait3.t,
//   trait4: trait4.j,
// };
// const entp: mbti = {
//   trait1: trait1.e,
//   trait2: trait2.n,
//   trait3: trait3.t,
//   trait4: trait4.p,
// };

// enum mbtis {
//   intj,
//   intp,
//   infj,
//   infp,
//   istj,
//   istp,
//   isfj,
//   isfp,
//   entj,
//   entp,
//   enfj,
//   enfp,
//   estj,
//   estp,
//   esfj,
//   esfp,
// }

// const d = { mbti: mbtis.enfj };
