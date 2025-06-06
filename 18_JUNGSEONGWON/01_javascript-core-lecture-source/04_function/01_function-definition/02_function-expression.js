// 함수 표현식
// 자바스크립트의 함수는객체 타입의 성질을 갖는 "일급 객체"이다.
// 함수 리터럴로 생성한 객체를 변수에 할당할 수 있다.

var hello = function (name) {
  return `${name}님 안녕하세요~`;
};
console.log(hello("유관순"));

var calc = function add(a, b) {
  return a + b;
};
console.log(calc(1, 2));
// 단, 함수 호출은 식별자로 이루어지며 함수명으로는 호출 할 수 없다.
console.log(add(1,2));
// console.log(add(1,2)); -> Refernece 오류