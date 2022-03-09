"use strict";

var number = 1;

function num() {
  console.log(this.number);
}

let num3 = num.bind(window);
let num2 = num;

// num2();
num3();
