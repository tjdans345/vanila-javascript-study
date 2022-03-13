/**
1. 라면을 뜯는다.
2. 물을 끓이기 시작한다.
3. 물이 끓으면 -> 물이 끓습니다. 호출
4. 라면을 넣는다.
5. 스프를 넣는다.
6. 3분간 기다린다. -> 3분이 지났습니다.
7. 먹는다
 */

// const getStart = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("라면을 끓이기 시작합니다!");
//     }, 3000);
//   });
// };

// const 라면뜯기 = (proccess) => {
//   console.log(proccess);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("라면 봉지를 뜯을게요~!");
//     }, 2000);
//   });
// };

// const 물끓이기 = (proccess) => {
//   console.log(proccess);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("물이 다 끓었습니다! ");
//     }, 10000);
//   });
// };

// const 라면넣기 = (proccess) => {
//   console.log(proccess);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("라면을 넣습니다. 스프도 호로록 넣을게요! ");
//     }, 3000);
//   });
// };

// const 라면을기다리는시간 = (proccess) => {
//   console.log(proccess);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("라면이 완성되었습니다!!!!!!!! 헤헤헤헤헤헤헤헤헤헤헤헿ㅎ");
//     }, 20000);
//   });
// };

// getStart()
//   .then((proccess) => 라면뜯기(proccess))
//   .then((proccess) => 물끓이기(proccess))
//   .then((proccess) => 라면넣기(proccess))
//   .then((proccess) => 라면을기다리는시간(proccess))
//   .then((proccess) => {
//     console.log(proccess);
//     return new Promise((resolve, reject) =>
//       setTimeout(() => {
//         resolve("라면먹을거야!");
//       }, 2000)
//     );
//   })
//   .then((finish) => console.log(finish));

// const test = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(console.log("하이")), 3000);
//   });
// };

// async function getStart() {
//   await test().then(() => {});
//   console.log("사와디깝");
// }

// getStart();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "애플";
}

async function getBanana() {
  await delay(3000);
  return "바나나";
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

pickFruits().then((result) => console.log(result));
getApple()
  .then((res) => getBanana())
  .then((res) => console.log(`adsdasads ${res}`));
