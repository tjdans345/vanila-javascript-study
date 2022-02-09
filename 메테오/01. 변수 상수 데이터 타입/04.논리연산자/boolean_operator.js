let init = {
  one: function () {
    let o1 = true && true; // true 반환, 둘 다 true인 경우 true를 반환한다. 하나라도 false 이면 false
    let o2 = true && false; // false 반환, 둘 중 하나라도 false이면 false를 반환
    let o3 = true || false; // true 반환, 둘중 하나라도 true 이면 ture 반환
    let o3_1 = false || true; // 테스트
    let o4 = 3 == 3 && 4 == 4; // true 반환

    document.write(o1 + "<br>");
    document.write(o2 + "<br>");
    document.write(o3 + "<br>");
    document.write("테스트 " + o3_1 + "<br>");
    document.write(`테스트 ${o3_1} 입니다.`);
    document.write(o4);
  },
};

init.one();
i;
// true
// false
// true
// 테스트 true
// true
