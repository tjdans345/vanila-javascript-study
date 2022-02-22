// JavaScript의 객체 (Object)
let data = {
  // 키
  employees: [
    { first: "Jhon", lastName: "Doe" },
    { first: "Anna", lastName: "Smith" },
    { first: "Peter", lastName: "Jones" },
  ],
}; // 일본어

console.log(data);

let stringValue = JSON.stringify(data); // 영어로 바꿨음
// stringfy JavaScript의 오브젝트를 문자열로 바꿔줍니다
// (=> JSON으로 만들어 준다. => 서버간의 DATA를 교환하려고! )

let text = stringValue; // JSON 문자열을 담아줬다 text라는 변수에 !

console.log(text);

let obj = JSON.parse(text); // JSON 문자열을 JavaScript의 오브젝트로 바꿔줍니다.
