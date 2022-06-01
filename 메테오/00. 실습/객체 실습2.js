// 배열 요소의 값을 받으면 그 요소를 배열에서 찾아서 인덱스를 반환하는 함수find(arr, value)를 작성해보자.
let array = [
  "안젤라",
  "아가트",
  "니키",
  "윌리",
  "웰람슨",
  "션",
  "슬롬",
  "메테오",
  "코니",
];

function findArray(arr, value) {
  let find = 0; // 배열안에 찾는 값이 존재하는지 확인하려고 임의로 만든 필드

  // for문으로 바꾼거 올려놓기

    arr.forEach((element, index) => {
      if (element === value) {

        console.log(`배열 요소의 값은 ${index} 번째 인덱스에 위치하고 있습니다.`);

        find = 1; // 배열안에 찾는 값이 존재하는지 확인하려고 임의로 만든 필드
      }
    });

  if (find === 0) {
    console.log("찾으시는 값이 배열안에 존재하지 않습니다.");
  }
}

findArray(array, "zz");
