const say = (message) => {
  if (message != undefined) {
    console.log(message);
  } else {
    console.log("사랑의 파라미터를 채워주세요~");
  }
};

say("쿄쿄쿄쿄쿄쿄쿄쿄쿄");

const sayHello = (message = "파라미터가 없다능?") => {
  // 기본값이 파라미터에 선언되어 있어서 함수를 호출할 때 파라미터 값을 전달하지 않아도 사용할 수 있다!
  console.log(message); // 파라미터 값이 전달되지 않으면, 기본값을 출력한다!
};

sayHello();
