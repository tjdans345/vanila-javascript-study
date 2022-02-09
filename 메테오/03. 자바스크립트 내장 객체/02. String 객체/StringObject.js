// length
let test = "가나다라마바사아자차카타파하";
let testLength = test.length;

console.log(testLength);

// indexOf()
let str = "나는 메테오 입니다.";
let position = str.indexOf("메테오");
let position2 = str.indexOf("다");

console.log(position);
console.log(position2);

// lastIndexOf()
let str2 = "나는 메테오 입니다. 좋아하는 곡은 창모의 메테오 입니다.";
let position3 = str2.lastIndexOf("메테오");

console.log(position3);

// slice()

let text = "나는 메테오 입니다. 좋아하는 곡은 창모의 메테오 입니다.";
let fristPosition = text.indexOf("메");
let secondPosition = text.indexOf("오");

console.log(text.slice(fristPosition, secondPosition + 1));

// 첫 번째 파라미터인 시작 위치 인덱스를 음수로 주면, 문자열의 끝에서부터 거꾸로 읽는다!
let text2 = "딸기바나나";
let fristPosition2 = text2.indexOf("나");
let secondPosition2 = text2.indexOf("바");

console.log(-fristPosition2);
console.log(-secondPosition2);

console.log(text2.slice(-fristPosition2, -secondPosition2));

// substr() 응용 버젼 !
let 변수명뭐하지 = "나는 문어 꿈을꾸는문어 입니다.";
let 찾는문자열인덱스 = 변수명뭐하지.indexOf("꿈");
let 뽑아낼문자길이 = 변수명뭐하지.slice(찾는문자열인덱스).length;

console.log(변수명뭐하지);
console.log(찾는문자열인덱스);
console.log(뽑아낼문자길이);

let 돌고돌아드디어찾았음코드줄여봐야지 = 변수명뭐하지.substr(
  찾는문자열인덱스,
  뽑아낼문자길이
);
console.log(돌고돌아드디어찾았음코드줄여봐야지);

// replace() 응용
let 변수명 = "안녕 곤방와 싸와디깝ㅋㅋ";
let 바꿔보자 = 변수명.replace("안녕", "헬로");
console.log(바꿔보자);
let 바꿔바꿔모든걸다바꿔 = "안녕 곤방와 싸와디깝 케케켘";
// 응용해서 모든 공백 제거해버리기
while (바꿔바꿔모든걸다바꿔.indexOf(" ") !== -1) {
  바꿔바꿔모든걸다바꿔 = 바꿔바꿔모든걸다바꿔.replace(" ", "");
}
console.log(바꿔바꿔모든걸다바꿔);

// 정규식을 이용하여 모든 공백 제거
console.log(바꿔바꿔모든걸다바꿔.replace(/" "/g, ""));
