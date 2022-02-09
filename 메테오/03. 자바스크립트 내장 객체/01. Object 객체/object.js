// 빈 객체 생성
let person = new Object();

// 멤버 설정
person.firstName = "Jhon";
person.lastName = "Doe";
person.age = 1200;
person.getFullName = function () {
  return this.firstName + " " + this.lastName;
  // 자바스크립트 내에서 this는 '누가 나를 불렀느냐'를 뜻한다고 합니다.
  // 일반 함수가 아닌 메서드 호출 시 메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩 된다.
};

console.log(person.getFullName());

function cal(mode) {
  var funcs = {
    plus: function (left, right) {
      return left + right;
    },
    minus: function (left, right) {
      return left - right;
    },
  };
  return funcs[mode];
}
console.log(cal("plus")(2, 1)); // 3
console.log(cal("minus")(2, 1)); // 1

// cal('plus')가 cal 함수를 호출합니다 인자로는 'plus'를 주고있군요 !? 오호라
// cal 함수가 실행되고 쭉쭉 내려가다 보니 return funcs[mode] 를 반환 하네영
// 실제 데이터는 return funcs['plus']라고 부르고 있겠군요 ! 오호라
// 그러면 위를 보자구요 천장말구요 return funcs... 위의 코드를 ...ㅋ
// var funcs = { 블라블라 에보니까 어라 위에서 배운 오브젝트 객체 타입이네요 이렇게 반가울수가 다들 반갑죠? 그쵸?
// 결국 funcs['plus']는 function(left, right){return left + right} 를 부르는거네요
// 하나하나 짚다보니 구조가 보이네요 사실 멘붕오죠 ? 그래서 다시한번더 정리해볼게영
// cal('plius') -> funcs['plus'] -> function(left, right) {return left + right}
// 결론은 console.log(cal('plus')(2,1)) == console.log(function(2,1))를 호출하는 거였군요 ㅋㅋ 그냥 이런게 있구나하고 슥 넘겨버리죠 미래의 자신이 더 자세하게 이해해줄거에여 ㅋㅋㅋ

// 배열의 값으로도 사용가능
var process = [
  function (input) {
    return input + 10;
  },
  function (input) {
    return input * input;
  },
  function (input) {
    return input / 2;
  },
];
var input = 1;
for (var i = 0; i < process.length; i++) {
  input = process[i](input);
  console.log(input);
}
