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
