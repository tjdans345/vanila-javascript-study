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

// 자기 자신을 자바스크립트 객체로 표현하라
let meteor = {
  name: "성문",
  age: 29,
  homeGround: "Busan",
  say: function () {
    console.log("메테오 메테오 거대 메테오~~!");
  },
};

console.log(meteor.name);

function yupDoYouHave(arr, value) {
  if (arr.indexOf(value) != -1) {
    console.log(`I have ${value} in my ${arr.indexOf(value)} pocket`);
  } else {
    console.log("I don't have it");
  }
}

function yupDoYouHave2(arr, value) {
  arr.find((myArr, i) => {
    if (myArr == value) {
      console.log(`I have ${value} in my ${i} pocket`);
    } else {
      console.log("I don't have it");
    }
  });
}

var arr = ["Hej", 2000, true, 250000];

yupDoYouHave(arr, 2000);
yupDoYouHave2(arr, "Hello");
