let car = ["포르쉐", "람보르기니", "페라리", "마세라티", "재규어"];
console.log(car.toString()); // 포르쉐,람보르기니,페라리,마세라티,재규어

console.log("--------------join()--------------");
let car2 = ["포르쉐", "람보르기니", "페라리", "마세라티", "재규어"];
console.log(car2.join(" / "));

let userList = [
  {
    name: "kim",
    email: "kim@naver.com",
  },
  {
    name: "lee",
    email: "lee@naver.com",
  },
  {
    name: "sin",
    email: "sin@naver.com",
  },
];
let userHtml = [];
for (const user of userList) {
  userHtml.push("<tr>");
  userHtml.push(`<td>${user.name}</td>`);
  userHtml.push(`<td>${user.email}</td>`);
  userHtml.push("</td>");
}
console.log(userHtml); // ['<tr>', '<td>kim</td>', '<td>kim@naver.com</td>', '</td>', '<tr>', '<td>lee</td>', '<td>lee@naver.com</td>', '</td>', '<tr>', '<td>sin</td>', '<td>sin@naver.com</td>', '</td>']
console.log(userHtml.join("")); // <tr><td>kim</td><td>kim@naver.com</td></td><tr><td>lee</td><td>lee@naver.com</td></td><tr><td>sin</td><td>sin@naver.com</td></td>
document.querySelector;
document.getElementById("userTableTbody").innerHTML = userHtml.join("");

console.log("--------------pop()--------------");
let beers = ["cass", "hite", "max"];
// console.log(beers.pop());

// Stack 자료구조 만들어보자 !!! 응용!!
for (let i = 0; i < beers.length; i++) {
  console.log(beers.pop());
  console.log(beers);
}

console.log("--------------push()--------------");
let snacks = ["바나나킥", "새우깡", "감자깡", "고구마깡", "빠빠다코코넛"];
snacks.push("맛동산");
console.log(snacks.push("빼빼로")); // 7 ----- 오 신기하네요 푸쉬 하고 나면 배열 요소의 개수를 반환하네요 ㅋㅋ
console.log(snacks);

console.log("--------------shift()--------------");
let beers2 = ["cass", "hite", "max"];
console.log(beers2.shift()); // cass

console.log("--------------unshift()--------------");
let animals = ["개", "고양이", "소", "말", "돼지"];
console.log(animals.unshift("호랑이"));
console.log(animals);

let cities = [
  { code: "02", title: "서울" },
  { code: "21", title: "부산" },
  { code: "064", title: "제주" },
];

cities.unshift({ code: "00", title: "지역을 선택하세요" });

let options = [];
for (const city of cities) {
  options.push(`<option value = '${city.name}'> ${city.title} </option>`);
}
console.log(options);

console.log("--------------배열의 요소 변경!--------------");
let fruits = ["바나나", "키위", "딸기"];
fruits[0] = "메론";
console.log(fruits); // ['메론', '키위', '딸기']

console.log("--------------splice()--------------");
let fruits3 = ["바나나", "키위", "딸기"];
fruits3.splice(2, 0, "레몬", "포도");
console.log(fruits3);

console.log("--------------concat()--------------");
let arr1 = ["one", "two"];
let arr2 = ["three", "four"];
let arr3 = ["five", "six"];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2, arr3));

console.log("--------------slice()--------------");
let animals2 = ["개", "고양이", "소", "말", "돼지"];
console.log(animals2.slice(3)); //  ['말', '돼지']
console.log(animals2.slice(1, 3)); // ['고양이', '소']

console.log("--------------sort()--------------");

let points = [400, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points);
points.sort((a, b) => b - a);
console.log(points);

let animals3 = ["개", "고양이", "소", "말", "돼지"];
console.log(animals3.sort());
console.log(animals3.reverse());

console.log("--------------sort() 예제--------------");
let persons = [
  {
    name: "안젤라",
    point: 87,
    city: "센텀",
  },
  {
    name: "션",
    point: 76,
    city: "센텀",
  },
  {
    name: "아가트",
    point: 86,
    city: "센텀",
  },
  {
    name: "웰람슨",
    point: 85,
    city: "센텀",
  },
  {
    name: "니키",
    point: 80,
    city: "센텀",
  },
  {
    name: "윌리",
    point: 75,
    city: "센텀",
  },
];

persons.sort((a, b) => (a.point > b.point ? -1 : a.point < b.point ? 1 : 0));
console.log(persons);

console.log("--------------filter() 예제--------------");
let words2 = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

let result = words2.filter((word, index, words2) => {
  console.log(index);
  //   console.log(words2);
  return word.length > 6;
});
console.log(result);

console.log("--------------map()--------------");
let memberList = [
  {
    firstName: "재석",
    lastName: "유",
    email: "yu@gmail.com",
  },
  {
    firstName: "종국",
    lastName: "김",
    email: "kim@gmail.com",
  },
  {
    firstName: "석진",
    lastName: "지",
    email: "ji@gmail.com",
  },
  {
    firstName: "지효",
    lastName: "송",
    email: "song@gmail.com",
  },
  {
    firstName: "광수",
    lastName: "이",
    email: "lee@gmail.com",
  },
];

let memberList2 = memberList.map((memberList, index) => {
  return {
    fullName: memberList.lastName + memberList.firstName,
    firstName: memberList.firstName,
    email: memberList.email,
  };
});
console.log(memberList2);

console.log("--------------reduce()--------------");
let points5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let sum = points5.reduce((total, currentValue, index, test) => {
  console.log("test : " + test);
  console.log("total : " + total);
  console.log("currentValue : " + currentValue);
  return total + currentValue;
}, 0);
console.log(sum);

console.log("--------------Date - 생성자--------------");
// new Date()
let now = new Date(); // 사용자 브라우저의 시간을 가져옵니다.
console.log(now);

// new Date(year, month, day, hours, minutes, seconds, millise, conds)
let d = new Date(2021, 6, 24, 10, 33, 30, 0); // 특정 날짜 시간을 지정해서 Date 객체 생성
console.log(d);

// new Date(milliseconds)
let d2 = new Date(0);
let d3 = new Date(1000000000);

// new Date(date string)
let d4 = new Date("October 13, 2014 11:13:00");

console.log(d2);
console.log(d3);
console.log(d4);
