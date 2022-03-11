const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("POST", "/posts"); // HTTP Method, URL 정의
xhr.setRequestHeader("content-type", "application/json"); // 헤더 값 중 content-type 정의

const data = {
  id: 2,
  title: "XMLHttpRequest",
  author: "Jeremy",
};

// JSON.stringfy를 통해 오브젝트 데이터를 문자열 형태로 변경해서 전송해야 함!!!
// 자바스크립트 Object를 String 형태로 바꾸는 거임!
xhr.send(JSON.stringify(data));
