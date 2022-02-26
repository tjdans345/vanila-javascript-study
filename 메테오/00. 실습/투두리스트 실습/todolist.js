// 현재시간 구하는 함수 Date객체 이용
const timerFunction = () => {
  const timer = document.getElementById("timer");

  const today = new Date();
  let hour = today.getHours();
  if (hour == 0) {
    hour = 12;
  }

  hour > 12 ? (hour = `PM ${hour - 12}`) : `AM ${hour}`;
  timer.innerHTML = ` ${addZero(hour)} : ${addZero(
    today.getMinutes()
  )} : ${addZero(today.getSeconds())} `;
};

// 시간이 10보다 작으면 0을 포합하여 출력
const addZero = (num) => {
  return num < 10 ? (num = `0${num}`) : `${num}`;
};

// 시간 뿌려주는 함수
const timeStart = () => {
  timerFunction();
  setInterval(timerFunction, 1000);
};

window.onload = timeStart();

// 투두 추가 버튼 클릭 이벤트 함수
const todoAdd = function () {
  const todoList = document.getElementById("todo-list");
  let todoContent = document.getElementById("todo-content").value;
  todoList.append(todoContent);
};
