let data = {
  // data 라는 객체 안에 "employess"라는 키값으로 객체배열을 value로 가지고 있다.
  employess: [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Anna",
      lastName: "Smith",
    },
    {
      firstName: "Peter",
      lastName: "Jones",
    },
  ],
};

console.log(data);

console.log(JSON.stringify(data));
