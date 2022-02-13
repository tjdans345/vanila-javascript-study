let x = 123;
console.log(x.toString());
console.log(typeof x.toString());

let now = new Date();
let year = now.getFullYear(); // 현재 년도
let mount = now.getMonth() + 1; // 현재 월
let dayt = now.getDate(); // 현재 일

console.log(
  year +
    "-" +
    mount.toString().padStart(2, 0) +
    "-" +
    dayt.toString().padStart(2, 0)
);

let 지수 = 10.656;
console.log(지수.toExponential(2));
console.log(지수.toExponential(4));
console.log(지수.toExponential(6));

let f = 10.656;
console.log(f.toFixed(0));
console.log(f.toFixed(1));
console.log(f.toFixed(2));

console.log(
  "--------------------------toPrecision()--------------------------"
);
let p = 10.656;
console.log(p.toPrecision());
console.log(p.toPrecision(2));
console.log(p.toPrecision(4));

console.log("--------------------------parseInt()--------------------------");

console.log(parseInt("-10"));
console.log(parseInt("-12.33"));
console.log(parseInt("10"));
console.log(typeof parseInt("10 second"));

// 실수를 넣으면 정수로 반환하는 함수 만들어보기
// 객체를 배운걸 가지고 본인이 만들 수 있을것 같은 함수 만들고 기능 소개해보기

console.log("--------------------------parseFloat()--------------------------");
console.log(parseFloat("-10"));
console.log(parseFloat("-12.33"));
console.log(parseFloat("10"));
console.log(parseFloat(" 10 years"));
console.log(parseFloat(" years 10"));
console.log(typeof parseFloat("10 second"));
