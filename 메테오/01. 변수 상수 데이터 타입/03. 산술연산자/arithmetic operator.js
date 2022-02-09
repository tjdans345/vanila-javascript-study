let init = {
  one: function () {
    let x = 3;
    let y = ++x;

    document.write("전위 산술 연산자 : " + y + "<br>");
  },

  two: function () {
    let x = 3;
    let y = x++;

    document.write("후위 산술 연산자 : " + y + "<br>");
  },

  three: function () {
    let x = 3;
    let y = -x;

    document.write("단항 부정 연산자 : " + y + "<br>");

    let test = true;
    let result = -test;

    document.write("과연 ? : " + result + "<br>");
    // 과연 ? : -1
  },

  four: function () {
    let x = "3";
    let y = +x;
    document.write("숫자화 연산자 : " + y);
    document.write("타입은 ? : " + typeof y);
  },
};

init.one();
init.two();
init.three();
init.four();

// 전위 산술 연산자 : 4
// 후위 산술 연산자 : 3
// 단항 부정 연산자 : -3
// 과연 ? : -1
// 숫자화 연산자 : 3타입은 ? : number
