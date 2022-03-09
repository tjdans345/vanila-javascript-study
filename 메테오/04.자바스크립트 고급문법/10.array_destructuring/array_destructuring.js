let arr = [10, 20, 30];

let [first, second, third] = arr;

console.log(first);
console.log(second);
console.log(third);

let arr2 = [10, 20, 30, 40, 50];

let [x, y, ...arr3] = arr2;

console.log(arr3);

let arrinarr = [1, 2, [10, 20, 30]];

console.log(arrinarr);

let [x1, y1, [a, b, c]] = arrinarr;

console.log(a);
console.log(b);
console.log(c);

function test() {
  var a2 = "test입니다.";
}

console.log(a2);
