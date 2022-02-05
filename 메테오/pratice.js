// 52, 273, 103, 32, 57, 103, 31, 2]와 같은 숫자 배열이 주어질 때, 배열
//       내부에서 최대값과 최소값을 찾는 코드를 만들어라

let array = [52, 273, 103, 32, 57, 103, 31, 2, 1, 1024];
let maxResult;
let minResult;

for (let i = 0; i < array.length; i++) {
  if (maxResult >= array[i]) {
  } else {
    maxResult = array[i];
  }

  if (minResult <= array[i]) {
  } else {
    minResult = array[i];
  }
}

console.log(maxResult);
console.log(minResult);
