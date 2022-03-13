let formData = new FormData(); // FormData 객체 생성. FormData는 파일을 포함한 데이터를 전송할 수 있도록 해주는 객체이다.

let fileField = document.querySelector("input[type='file']"); // 사용자가 선택한 파일
formData.append("username", "abc123"); // 텍스트 데이터
formData.append("attachment", fileField.files[0]); // 파일

fetch("url", {
  method: "POST",
  body: formData,
})
  .then((response) => {
    setTimeout(() => response.json()), 3000;
  })
  .catch((error) => console.error("Error :", error))
  .then((response) => console.log("Success : ", JSON.stringify(response)));

// ************** 다중 파일 **************
let formData2 = new FormData(); // FormData 객체 생성. FormData는 파일을 포함한 데이터를 전송할 수 있도록 해주는 객체이다.

let photos = document.querySelector("input[type='file'][multiple]"); // 사용자가 선택한 파일, 다중 파일 선택 HTML 요소
formData.append("title", "Myphotos"); // 텍스트 데이터
for (let i = 0; i < photos.files.length; i++) {
  // 선택한 파일 수 만큼 반복문을 사용해서 FormData에 삽입
  formData.append("phtos", photos.files[i]);
}
formData.append("attachment", fileField.files[0]); // 파일

fetch("url", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .catch((error) => console.error("Error :", error))
  .then((response) => console.log("Success : ", JSON.stringify(response)));
