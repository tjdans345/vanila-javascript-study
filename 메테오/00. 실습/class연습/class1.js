// 사람이라는 Class를 정의하고 기본적인 특징을 구성하고 이를 이용하여
// 각각의 사람(객체)을 5명 만드세요.
// Class가 가지는 공통 특징
// (이름, 나이, 성별, 좋아하는 음식, 싫어하는 음식 / 함수 : 자기소개, 배고프다 말하기, 배부르다 말하기, 좋아하는 음식 말하기, 싫어하는 음식 말하기)

class Person {
  constructor(name, age, gender, likeFood, hateFood) {
    this.p = name;
    this.age = age;
    this.gender = gender;
    this.likeFood = likeFood;
    this.hateFood = hateFood;
  }

  introduce = () => {
    console.log(`안녕하세요 저는 ${this.name} 입니다.
      저는 ${this.age}살 이고 성별은 ${this.gender} 입니다.
      제가 좋아하는 음식은 ${this.likeFood} 이고, 싫어하는 음식은 ${this.hateFood} 입니다!
      `);
  };

  sayHungry = () => {
    console.log("배고프단 말이야 밥줘");
  };

  sayFull = () => {
    console.log("배부르단 말이야 밥 그만줘");
  };

  sayLikeFood = () => {
    console.log(`난 ${this.likeFood}를 좋아하지 후후`);
  };

  sayHateFood = () => {
    console.log(`난 ${this.hateFood}를 싫어하지 으악`);
  };
}

class girl extends Person {
  constructor(name, age, gender, likeFood, hateFood, hair) {
    super(name, age, gender, likeFood, hateFood);
    this.hair = hair;
  }

  sayHair = () => {
    console.log(`내 헤어스타일은 ${this.hair} 라구 오이오이`);
  };
}

class boy extends Person {
  constructor(name, age, gender, likeFood, hateFood, army) {
    super(name, age, gender, likeFood, hateFood);
    this.army = army;
  }

  sayArmy = () => {
    console.log(`나는 ${this.army} 입니다!`);
  };
}

let 니키 = new girl("이슬기", 31, "female", "막걸리", "회", "숏컷");
니키.introduce();
니키.sayHungry();
니키.sayFull();
니키.sayLikeFood();
니키.sayHateFood();
니키.sayHair();
let 슬롬 = new boy("박재빈", 29, "male", "치킨", "고기", "군필");
슬롬.introduce();
슬롬.sayArmy();
