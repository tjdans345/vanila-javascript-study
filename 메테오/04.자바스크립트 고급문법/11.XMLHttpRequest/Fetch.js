fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    response.json();
  })
  .then((json) => {
    console.log(json);
  });
let a = 3;
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT", // HTTP 요청 방법
  body: JSON.stringify(
    // 전송할 데이터
    {
      id: 1,
      title: "zzz",
      body: "ggg",
      userId: 1,
    }
  ),
  headers: {
    // 헤더 값 정의
    "Content-type": "application/json; charset=UTF-8", //content-type 정의
  },
})
  .then((response) => {
    console.log("커몬");
    a = 10;
    // setTimeout(() => {
    //   console.log("3초를 기다리자...");
    //   a = 10;
    // }, 3000);
    response.json();
  })
  .then((json) => {
    console.log("엥?" + a);
    console.log(json);
  });
console.log("비동기네 ?" + a);
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE", // HTTP 요청 방법
});
