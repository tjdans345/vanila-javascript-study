console.log("--------------Date - 실습--------------");
function getIntervalDate(day) {
  let now = new Date();
  let dayMilliseconds = 60 * 60 * 24 * 1000;

  return new Date(now.getTime() + dayMilliseconds * day);
}

console.log(getIntervalDate(-9));
