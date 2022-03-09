const getObject = () => {
  return {
    username: "메테오",
    age: 29,
    emial: "tjdans34568@gmail.com",
  };
};

// 이렇게 Object의 필요한 키 값만 받아서 사용 가능하다!! 와 신기방기하네요
let { username, age } = getObject();

console.log(username);
console.log(age);

// 함수 파라미터에서도 적용 가능!
function test({ username, age }) {
  console.log(`${username}는 ${age}살 이지롱`);
}

// 함수 파라미터로 함수를 전달가능하쥬 ?? ㅎㅎㅎ 1급 객체니까 ~
test(getObject());
