// 선언적 함수
function add(n1: number, n2: number): number {
  return n1 + n2;
}
// 익명 함수
const add2 = function (n1: number, n2: number): number {
  return n1 + n2;
};

// 람다 함수 (= 화살표함수)
const add3: (n1: number, n2: number) => number = (
  n1: number,
  n2: number
): number => {
  return n1 + n2;
};
//add3: (n1: number, n2: number) => number 타입을 지정해준 부분
// (n1: number, n2: number): number => {return n1 + n2;}; 실질적인 함수 부분
