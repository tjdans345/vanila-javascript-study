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

// Object
// employess: Array(3)
// 0: {firstName: 'John', lastName: 'Doe'}
// 1: {firstName: 'Anna', lastName: 'Smith'}
// 2: {firstName: 'Peter', lastName: 'Jones'}
// length: 3
// [[Prototype]]: Array(0)
// [[Prototype]]: Object

// {"employess":[{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]}
