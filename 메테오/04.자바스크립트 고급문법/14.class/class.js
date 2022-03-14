class Car {
  // constructor함수(생성자 함수)!!!
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  // Class 내의 함수 정의
  getModelName() {
    return this.modelName;
  }
  getModelYear() {
    return this.modelYear;
  }
  getType() {
    return this.type;
  }
  getPrice() {
    return this.price;
  }

  setModelName(modelName) {
    this.modelName = modelName;
  }

  setModelYear(modelYear) {
    this.modelYear = modelYear;
  }

  setType(type) {
    this.type = type;
  }

  setPrice(price) {
    this.price = price;
  }
}

let ionic = new Car("아이오닉", "2021", "e", 4000); // 아이오닉 차량 생성
let genesis = new Car("제네시스", "2021", "g", 7000); // 제네시스 차량 생성

let ModelName = ionic.getModelName(); // 차량 모델명 가져오기
ionic.setPrice(4500); // 차량 가격 변경

// 상속 받을 자식 클래스 생성
class ElectricCar extends Car {
  constructor(modelName, modelYear, type, price, chargeTime) {
    // 부모 클래스에 정의된 필드에 값을 할당 할 때는 super 키워드를 사용한다.
    super(modelName, modelYear, type, price);
    // 자식만이 갖는 특성의 값을 추가할 때는 consturctor를 사용하여 일반적인 class 값 할당 방식을 사용한다.
    this.chargeTime = chargeTime;
  }

  getChargeTime() {
    return this.chargeTime;
  }

  setChargeTime(time) {
    this.chargeTime = time;
  }

  testFunction() {
    console.log("테스트입니더");
  }
}

let 전기차1 = new ElectricCar("찌리리차", "2021", "electric", 8500, 30);
전기차1.testFunction();
console.log(전기차1.getChargeTime());
전기차1.setChargeTime(50);
console.log(전기차1.getChargeTime());
// 고마 벌써 class 단원을 다해뿟심더
console.log(전기차1.getPrice());
