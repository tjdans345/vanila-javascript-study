const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1"); // HTTP Method, URL 정의
xhr.setRequestHeader("content-type", "application/json"); // 헤더 값 중 content-type 정의

const data = {
  userId: 1,
  title: "foo",
  body: "bar",
};

// JSON.stringfy를 통해 오브젝트 데이터를 문자열 형태로 변경해서 전송해야 함!!!
// 자바스크립트 Object를 String 형태로 바꾸는 거임!
xhr.send(); // 요청 전송

xhr.onload = () => {
  if (xhr.status === 200) {
    // 정상적으로 응답되면 status가 200
    const res = JSON.parse(xhr.response); // 응답 데이터를 JSON.parse 함수로 JSON 객체로 변경합니다!
    console.log(res);
  } else {
    // 에러 발생
    console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력합니다!
  }
};
