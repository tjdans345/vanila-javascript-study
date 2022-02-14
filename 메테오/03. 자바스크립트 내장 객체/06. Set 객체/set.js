let mySet = new Set();

mySet.add("창모");
mySet.add("구창모");
mySet.add("덕소 쉐키");
mySet.add("덕소의 아들");
mySet.add("덕소의 아들");

console.log(mySet);

console.log(mySet.has("호미들"));
console.log(mySet.has("창모"));

mySet.add("호미들");
console.log(mySet);
mySet.delete("호미들");
console.log(mySet);
// mySet.clear();
// console.log(mySet);

mySet.forEach((item, item2, mySet) => console.log(mySet.has("창모")));

// 창모
// 구창모
// 덕소 쉐키
// 덕소의 아들
