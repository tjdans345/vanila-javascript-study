fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    response.json();
  })
  .then((json) => {
    console.log(json);
  });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // HTTP 요청 방법
  body: JSON.stringify(
    // 전송할 데이터
    {
      title: "foo",
      body: "bar",
      userId: 1,
    }
  ),
  headers: {
    // 헤더 값 정의
    "content-type": "application/json; charset=UTF-8", //content-type 정의
  },
})
  .then((response) => {
    response.json();
  })
  .then((json) => {
    console.log(json);
  });
