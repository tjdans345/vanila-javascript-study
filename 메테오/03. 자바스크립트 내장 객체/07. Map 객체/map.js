let userMap = new Map();

userMap.set("메테오", "엄성문");
userMap.set("션", "주시온");
userMap.set("안젤라", "정수진");
userMap.set("니키", "이슬기");
userMap.set("윌리", "왕현경");
userMap.set("웰람슨", "백수원");
userMap.set("아가트", "김보라");
userMap.set("슬롬", "박재빈");

console.log(userMap.size);

console.log(userMap.get("메테오"));
console.log(userMap.has("메테오"));

userMap.delete("메테오");
console.log(userMap);

// Map(7) {'션' => '주시온', '안젤라' => '정수진', '니키' => '이슬기', '윌리' => '왕현경', '웰람슨' => '백수원', …}
// [[Entries]]
// 0: {"션" => "주시온"}
// 1: {"안젤라" => "정수진"}
// 2: {"니키" => "이슬기"}
// 3: {"윌리" => "왕현경"}
// 4: {"웰람슨" => "백수원"}
// 5: {"아가트" => "김보라"}
// 6: {"슬롬" => "박재빈"}
// size: 7
// [[Prototype]]: Map=

userMap.forEach((user) => console.log(user));

// 주시온
// 정수진
// 이슬기
// 왕현경
// 백수원
// 김보라
// 박재빈
