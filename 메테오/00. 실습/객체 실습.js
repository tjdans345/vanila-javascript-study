// 1. 다음의 표를 객체로 만들어라
let book = {
  name: "Nature of Code",
  price: 30000,
  writer: "Deniel shifman",
  ISBM: 9788968481901,
  totalPage: 620,
};

// 2. 다음의 데이터를 객체 배열로 만들어라
let stacraftUnit = [
  {
    name: "일벌레",
    mineral: 50,
    gas: 0,
    supplies: 1,
  },
  {
    name: "여왕",
    mineral: 150,
    gas: 0,
    supplies: 2,
  },
  {
    name: "바퀴",
    mineral: 75,
    gas: 25,
    supplies: 2,
  },
  {
    name: "히드라리스크",
    mineral: 100,
    gas: 50,
    supplies: 2,
  },
  {
    name: "타락귀",
    mineral: 150,
    gas: 100,
    supplies: 2,
  },
];

// 다음 코드의 오류를 수정하라
let object = {
  "+": 1,
  "-": 2,
  "*": 3,
  "/": 4,
};

console.log(object["+"]);
console.log(object["-"]);
console.log(object["*"]);
console.log(object["/"]);
