import { Electronics } from "./Electronics.js";

export class Iphone extends Electronics {
  constructor(name, price) {
    super(name, price);
  }

  slice = () => {
    console.log("밀어서 잠금 해제");
  };
}

let iphone = new Iphone("아이폰", 150000);
iphone.slice();
