while (condition) {
  // 코드 블록
}

let i = 1;

while (i <= 10) {
  console.log("The Number is : " + i);
  i++;
}

let inputPrice = 7000;
let coinUnit = 500;
let coinCount = 0;

while (inputPrice > 0) {
  inputPrice = inputPrice - coinUnit; // inputPrice 금액이 500원 씩 줄어든다.
  coinCount++; // 반복문이 한 번 돌 때마다 반환되는 500원짜리 동전 수를 증가시킴
}

console.log(coinCount); // 반환된 500원짜리 총 개수
