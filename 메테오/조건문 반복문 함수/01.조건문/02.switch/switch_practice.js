let d = new Date();
let day = d.getDay(); // 0 : 일요일, 1 : 월요일, 2 : 화요일 , 3 : 수요일, 4 : 목요일, 5 : 금요일, 6 : 토요일 반환
let dayName = "";

switch (day) {
  case 0:

  case 0:
    dayName = "일요일";
    break;
  case 1:
    dayName = "월요일";
    break;
  case 2:
    dayName = "화요일";
    break;
  case 3:
    dayName = "수요일";
    break;
  case 4:
    dayName = "목요일";
    break;
  case 5:
    dayName = "금요일";
    break;
  case 6:
    dayName = "토요일";
    break;
}
