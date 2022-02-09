// for (const key in ojbect) {
//     // 실행할 코드 블록
// }

let person = { frame: "Jhon", name: "Doe", age: 25 };

for (const key in person) {
  // key 값으로 Object의 value 값을 들고온다
  console.log(person[key]);
}

let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for (const brand in brand) {
  console.log(brand);
}
