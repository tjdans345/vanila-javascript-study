const sum = (x1, x2) => {
  // 파라미터를 2개만 전달 받을 수 있다!
  return x1 + x2;
};

let result = sum(5, 7);
console.log(result);

// Rest Parameter 사용 !
const restParameterSum = (...args) => {
  let total = 0;
  console.log(args);
  for (let x of args) {
    total += x;
  }

  return total;
};

console.log(restParameterSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
