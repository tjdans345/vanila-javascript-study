let firstName = "Me";
let lastName = "teor";

let whoIs = {
  // 즉 키값은 말그대로 문자열이 됩니다. 위에 변수가 선언되었지만 오브젝트를
  // 콘솔에 찍어보면 키 값인 firstName에 Me가 찍히는게 아니라 "firstName"이라고 그대로 출력이 되죠!
  firstName: firstName,
  lastName: lastName,
};

console.log(whoIs);

let job = "designer";
let job2 = "developer";

let whoIs2 = {
  [job]: "Angela",
  age: 31,
};

console.log(whoIs2);
