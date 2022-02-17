// let person = {
//   firstName: "Jeremy",
//   lastName: "Go",
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// for (const key in person) {
//   console.log(key);
// }

// ---------Symbol 이용---------
let person = {
  firstName: "Jeremy",
  lastName: "Go",
};

let getFullName = Symbol("getFullName"); // 유일한 key 생성
person[getFullName] = function () {
  return this.firstName + " " + this.lastName;
};

for (const key in person) {
  console.log(key);
}

console.log(person[getFullName]()); // Jermy Go

person.ers = "test";

console.log(person.ers);

console.log(person);

let person2 = {
  firstName: "Jeremy",
  lastName: "Go",
};

let getFullName2 = Symbol("getFullName2");
person2[getFullName2] = function () {
  console.log("흐으음. . .");
};

console.log(person2);
console.log(person2[getFullName2]()); //
