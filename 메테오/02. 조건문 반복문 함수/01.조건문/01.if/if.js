// 다음은 버스의 기본 요금표이다.
// - 미취학 아동(7세 이하) 0원
// - 어린이 (8세 이상 13세 이하) - 450원
// - 청소년 (14세 이상 19세 이하) - 720원
// - 일반(20세 이상) - 1200원
// - 노인(70세 이상) - 0원

let age = 12; // 나이
let busFare = 0; // 버스 기본 요금

if (age <= 7) {
  // 나이가 7세 이하이면
  burFase = 0;
}

if (age >= 8 && age <= 13) {
  busFare = 450;
}

if (age >= 14 && age <= 19) {
  busFare = 720;
}

if (age >= 20 && age < 70) {
  busFare = 1200;
}

if (age >= 70) {
  busFare = 0;
}

console.log(busFare);
