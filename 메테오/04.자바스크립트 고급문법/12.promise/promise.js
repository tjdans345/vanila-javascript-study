"use strict";

// Promise is a JavaScript object for asynchronous operation.
// 1. 프로미스의 상태를 고려!
// state : 오퍼레이션 수행 중-> 펜딩 상태 / 오퍼레이션 성공적으로 수행 -> 풀필드 상태 / 오퍼레이션 문제 발생 -> 리젝티드 상태
// 2. 프로듀서와 컨슈머의 차이를 알기!

// 1 . Producer
// Promise를 만드는순간 자동으로 바로 실행 된다.
// 사용자가 실행하지도 않았는데 실행이 되는 문제가 있다.
const promise = new Promise((resolve, reject) => {
  // 네트워크에서 받아오는 비지니스 로직 (비동기 방식으로 처리한다)\
  console.log("doing something...");
  setTimeout(() => {
    resolve("성공적으로 수행했어~!~! 무야호~~~");
    // reject(new Error("no network"));
  }, 2000);
}); // Producer 만들기 완료

// 2. Consumers : then, catch, finally
// 콜백함수안에 value라는 값은 프로미스함수에서 정상적으로 잘 수행되었을 때 resolve 콜백함수에서 전달 된 값이 들어온다
// 즉 then 이라는 것은 프로미스 함수에서 정상적으로 수행되어서
// 최종적으로 resolve라는 콜백함수를 통해 전달 한 값이 value 파라미터로 전달되어져서 들어 오는것!
promise // 칠리닝! then을 호출하면 프로미스가 리턴 된다.
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  // finally 는 성공 , 실패 여부 상관없이 무조건 호출!
  .finally(() => console.log("프로미스 끝~!"));

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    // then은 값을 바로 전달해도 되고 또 다른 Promise를 전달해도 된다 ! 대신 다른 Promise는 return을 해줘야하네
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`🐓`), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// 확실히 콜백 지옥처럼 안보이네
getHen()
  .then((hen) => getEgg(hen))
  // 다른 함수를 받아오는 경우에는 (value) => <<< 생략 가능
  //   .then(getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));
