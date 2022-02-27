/**
 * 투두리스트 Ver1.  Developer Meteor
 * 이번 TODO 리스트 구현 목표
 * 1. let, const 변수 활용하기
 * 2. 일반 function 보다 애로우 펑션을 활용할 것
 * 3. 자바스크립트 스터디에서 배운 개념에서 최대한 구현할 것
 */

// 현재시간 구하는 함수 Date객체 이용
const timerFunction = () => {
  const timer = document.getElementById("timer");
  const today = new Date();
  let hour = today.getHours();
  if (hour == 0) {
    hour = 12;
  }
  hour > 12 ? (hour = `PM ${hour - 12}`) : `AM ${hour}`;
  timer.innerHTML = `현재 시간 ${addZero(hour)} : ${addZero(
    today.getMinutes()
  )} : ${addZero(today.getSeconds())} `;
};

// 시간이 10보다 작으면 0을 포합하여 출력
const addZero = (num) => {
  return num < 10 ? (num = `0${num}`) : `${num}`;
};

/**
 * 초기 시간 작동 및 1초마다 시간 리셋
 */
const timeStart = () => {
  timerFunction();
  setInterval(timerFunction, 1000);
};

window.onload = timeStart();

/**
 * 투두리스트 추가 버튼 이벤트
 */
const todoAdd = () => {
  let todoContent = document.getElementById("todo-content").value;
  const tasks = document.getElementById("tasks");
  tasks.append(makeHtml(todoContent));
};

/**
 * 투두리스트 동적 요소 만들기
 * @param {*} content
 * @returns 추가되는 투두 컨텐츠
 */
const makeHtml = (content) => {
  const todoContent = document.createElement("div");
  todoContent.className = "task";
  todoContent.innerHTML = `
  <span id="taskname"> ${content}</span>
  <button class="delete" id="delete-btn" onClick="deleteBtn(this)">삭제</button>`;
  return todoContent;
};

const deleteBtn = (target) => {
  const taskNode = target.parentNode;
  taskNode.parentNode.removeChild(taskNode);
};
