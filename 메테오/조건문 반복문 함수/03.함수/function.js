function sum(p1, p2) {
  // 함수 선언
  return p1 + p2;
}

let sum1 = sum(21, 24);
let sum2 = sum(30, 20);

/**
 * 덧셈 함수
 * @param {number} n1
 * @param {number} n2
 * @returns n1 + n2
 */
function add(n1, n2) {
  console.log(n1 + n2);
  return n1 + n2;
}

/**
 * 뺄셈 함수
 * @param {number} n1
 * @param {number} n2
 * @returns n1 + n2
 */
function minus(n1, n2) {
  console.log(n1 - n2);
  return n1 - n2;
}

/**
 * 곱셈 함수
 * @param {number} n1
 * @param {number} n2
 * @returns n1 * n2
 */
function multiple(n1, n2) {
  return n1 * n2;
}

/**
 * 나눗셈 함수
 * @param {number} n1
 * @param {number} n2
 * @returns n1 / n2
 */
function devide(n1, n2) {
  console.log(n1 / n2);
  return n1 / n2;
}

/**
 * 사칙연산 함수
 * @param {number} n1
 * @param {number} n2
 * @param {String} operator
 * @returns 사칙연산 결과
 */
function calculator(n1, n2, operator) {
  if (operator == "+") {
    return add(n1, n2);
  } else if (operator == "-") {
    return minus(n1, n2);
  } else if (operator == "*") {
    return multiple(n1, n2);
  } else if (operator == "/") {
    return devide(n1, n2);
  }
  return n1 / n2;
}
