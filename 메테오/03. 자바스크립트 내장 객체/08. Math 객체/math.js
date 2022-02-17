console.log(Math.round(4.5));
console.log(Math.round(3));
console.log(Math.round(2.7));
console.log(Math.round(3.2));
console.log(Math.round(5.0));

// 5
// 3
// 3
// 3
// 5
console.log("-------Math.ceil()-------");
console.log(Math.ceil(4.5));
console.log(Math.ceil(3));
console.log(Math.ceil(2.7));
console.log(Math.ceil(3.2));
console.log(Math.ceil(5.0));

// -------Math.ceil()-------
// 5
// 3
// 3
// 4
// 5

console.log("-------Math.floor()-------");
console.log(Math.floor(4.5));
console.log(Math.floor(3));
console.log(Math.floor(2.7));
console.log(Math.floor(3.2));
console.log(Math.floor(5.0));

// -------Math.floor()-------
// 4
// 3
// 2
// 3
// 5

// -------Math.pow()-------
console.log("-------Math.pow()-------");
console.log(Math.pow(2, 3));
console.log(Math.pow(3, 2));
console.log(Math.pow(4, 2));

// -------Math.sqrt()-------
console.log("-------Math.sqrt()-------");
console.log(Math.sqrt(64));
console.log(Math.sqrt(20));
console.log(Math.sqrt(12));

// -------Math.sqrt()-------
// 8
// 4.47213595499958
// 3.4641016151377544

// -------Math.abs()-------
console.log("-------Math.abs()-------");
console.log(Math.abs(-64));
console.log(Math.abs(-20));
console.log(Math.abs(-12.52));

// -------Math.abs()-------
// 64
// 20
// 12.52

// -------Math.min()-------
console.log("-------Math.min()-------");
console.log(Math.min(-64, 15, 0, 35));

// -------Math.min()-------
// 64
// 20
// 12.52

// -------Math.max()-------
console.log("-------Math.max()-------");
console.log(Math.abs(15, 57, 80, 17, 50, 120));
// -------Math.max()-------
// 64
// 20
// 12.52

// -------Math.random()-------
console.log("-------Math.random()-------");
console.log(Math.random());
console.log(Math.random() * 10);

for (let i = 0; i < 10; i++) {
  console.log("-------기준선-------");
  console.log(Math.floor(Math.random() * 10));
}
