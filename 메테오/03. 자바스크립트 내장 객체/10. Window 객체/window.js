// alert("이것은 alert 창 이라네... 용사여 . . . . . . ");

// console.log(confirm("정말 삭제하시겠습니까?"));

// if (confirm("정말 삭제하시겠습니까?")) {
//   // 삭제 실행
//   console.log("삭제 실행");
// }

// let txt = prompt("비밀번호를 입력해주세요 낄낄");

// console.log(txt);

// window.open("https://naver.com");

// let myExec;

// function myFunction() {
//   myExec = setTimeout(function () {
//     console.log("5초 후 프로그램 실행 ");
//   }, 5000);
// }

// console.log("뭐가 먼저 실행될까 ?");

// function myStopFunction() {
//   clearTimeout(myExec);
// }

// myFunction();

// // 뭐가 먼저 실행될까 ?
// // 5초 후 프로그램 실행

// let i = 0;
// let fnc = setInterval(function () {
//   console.log("3초마다 프로그램 실행 - " + i);
//   if (i == 3) {
//     clearInterval(fnc);
//     console.log("프로그램 종료");
//   }
//   i++;
// }, 3000);

var windowTest = "qwert"; // let 선언자는 윈도우 객체에 등록되지 않는군요 오호라...

console.log(window.windowTest);
window.test = "test입니다.";
