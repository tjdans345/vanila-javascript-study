// 함수 선언식
function hello(name) {
  return `Hello !!! ${name}`;
}

console.log(hello("메테오"));

// 함수 표현식
const hello2 = function (name) {
  return `Hello !~!~! ${name}`;
};

console.log(hello2("메테오~!"));

// 애로우 펑션 (화살표 함수)
const hello3 = (name) => {
  return `Hello ${name}`;
};

console.log(hello3("와우"));

// 파라미터가 하나일 때는 주변 괄호 생략 가능!!
const oneParameterArrowFunction = (name) => {
  console.log(`당신의 이름은 ${name} 이군요 쿄쿄쿜`);
};

oneParameterArrowFunction("김철수");

// 화살표 함수의 유일한 문장이 'return'일 때 'return'과
// 중괄호({})를 생략할 수 있다!
const dontWorry = (name) => `Hello ${name}`;

console.log(dontWorry("제임슨"));
