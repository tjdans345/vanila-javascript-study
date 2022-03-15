// try {
//   noExistentFunctoin(); // 존재하지않는 함수 호출
// } catch (error) {
//   console.log("잡아주었으");
//   console.error(error);
// } finally {
//   console.log(
//     "try 코드 블록이 정상적으로 수행되든 오류를 발생시키든 상관없이 무조건 실행해야할 코드를 작성합니다."
//   );
// }

const test = (param) => {
  try {
    if (param === "error") {
      throw new Error("Custom Error Exception");
    }
  } catch (error) {
    console.log(error.message);
  }
};
