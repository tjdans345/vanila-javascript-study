// 변수
// var는 선언하기 전에 사용할 수 있다.
// let, const도 호이스팅이 된다.

// 호이스팅이란 : "스코프" 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
// Temporal Dead Zone (TDZ) : 이 영역에 있는 변수 즉 할당이 되기전의 변수는 사용 불가능

// var -> 선언 할당 동시에 진행
// let -> 선언 할당 따로 진행, 그 코드에 도달했을 때 할당이 진행 됨
// const -> 선언, 초기화 동시에 진행 선언 시 할당안하면 에러 발생

// 함수 스코프 / 블록 스코프
// var도 함수 내부에서 선언했을 때는 밖에서 사용이 불가능 하다!
// 함수스코프는 유일하게 벗어날 수 없는 영역

// 객체 리터럴

// 생성자 함수
// 첫글자는 대문자로 한다.
// new 키워드를 이용해서 생성한다
function User(name, age) {
  this.name = name;
  this.age = age;
}

// 객체 메서드
// Computed property
let a = "age";

const user2 = {
  name: "Mike",
  [a]: 30, // age : 30 [] 대괄호를 이용하여서 변수에 선언한 값을 프로퍼티(key)값으로 사용 가능하다 !
};

const user3 = {
  // 식 자체를 넣는것도 가능하다!
  [1 + 4]: 5,
  ["안녕" + "하세요"]: "Hello",
  [`반갑습니다`]: "싸와디깝",
};

// Object.assign() : 객체 복제
// 객체를 변수에 할당하면 복제가 되는 것이 아니라
const ceo = {
  name: "메테오",
  age: 29,
};

const wowCeo = Object.assign({}, ceo); // 첫 번째 파라미터 : 초기값, 두 번쨰 파라미터 : 복제할 값
// 초기 값으로 선언된 객체와 복제하기 위해 넘기는 객체가 합쳐진다 -> 즉 wowCeo2는 3개의 프로퍼티를 가진다
// 중복 된 키값으로 초기 객체를 선언하면 값이 덮어 씌어진다.
const wowCeo2 = Object.assign({ gender: "male" }, ceo);

// 2개 이상의 객체도 합칠 수 있다.
const member = { name: "mike" };
const info1 = { age: 30 };
const info2 = { gender: "male" };

const member2 = Object.assign(member, info1, info2); // 모든 객체가 합쳐진 객체를 반환

// Object.keys() : 키 배열 반환

// Object.values() : 값 배열 반환

// Object.entries() : 키/값 배열 반환

// Object.fromEntries() : 키/값 배열을 객체로 변환 시켜준다
const arr = [
  ["name", "meteor"],
  ["age", 29],
  ["gender", "male"],
];

console.log(Object.fromEntries(arr)); // {name: 'meteor', age: 29, gender: 'male'}

// Symbol
// property key : 문자형
const obj = {
  1: "1입니다.",
  false: "거짓",
};

// 문자열로 접근 가능
Object.keys(obj);
obj["1"]; // "1입니다."
obj["false"]; // "거짓"

// Symbol도 가능
// Symbol은 유일한 식별자를 만들 때 사용한다
const a3 = Symbol(); // new를 사용하지 않는다.

const id = Symbol("id");
const user7 = {
  name: "mike",
  age: 30,
  [id]: "myId",
};

// Symbol로 만들어 넣은 프로퍼티는 캡슐화가 보장된다.
console.log("심볼");
console.log(Object.keys(user7)); // name : mike, age : 30

// Symbol.for() : 전역 심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고, 있으면 가져온다.
// Symbol 함수는 매번 다른 Symbol값을 생성하지만,
// Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 symbol을 공유한다!

// 숨겨진 Symbol key 보는 법
Object.getOwnPropertySymbols(user7); // 심볼키만 보여줌
Reflect.ownKeys(user7); // 심볼키를 포함한 모든키를 보여줌

// 숫자, 수학 method
// toString()
// 10진수 -> 2진수/16진수
let num = 10;
num.toString(); // "10"
num.toString(2); // toString() 괄호안에 2를 넣으면 2진수르 변경시켜줌 "1010"
let num2 = 255;
num.toString(16); // 16을 넣었기에 16진수로 변환됨 "ff";
