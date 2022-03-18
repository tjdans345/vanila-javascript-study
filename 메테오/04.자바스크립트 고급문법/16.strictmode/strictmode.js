// "use strict"; // 아래 작성되는 모든 스크립트에 대해서 엄격 모드가 적용되어집네다!

// let x = 3.14; // 선언자 동무가 없으므로 에러가 발생합네다!

// function myFunction() {
//   y = 3.14; // 여기도 마찬가지로 선언자 동무가 없으므로 에러가 발생합네다!
//   console.log(y);
// }

// myFunction();

x = 3.14;
const myFunction = () => {
  "use strict";
  y = 3.14;
};

console.log(x);
myFunction();
