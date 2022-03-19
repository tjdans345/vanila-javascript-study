/**
 * 2번째 방법입니다. (안젤라 version) 이것도 좋은 방법이네요!
 * 각각의 전자기기들을 import해와서 공통 필드나, 기능들을 main.js에서 처리합니다.
 * 2중 임포트가 되는지도 테스트 되겠네요 (2중 임포트도 되네요 A import B / B improt C )
 */
import * as DeskTop from "./deskTop.js";
import * as Refrigerator from "./refrigerator.js";
import * as TV from "./tv.js";

export const turnOn = (name) => {
  console.log(`${name}의 전원을 킵니다.`);
};

export const turnOff = (name) => {
  console.log(`${name}의 전원을 끕니다.`);
};

export const introduce = (v) => {
  console.log(`이 기기의 기능은 ${v} 입니다.`);
};

// DeskTop.test();
turnOn(DeskTop.name);
// (2중 임포트도 되네요 A import B / B improt C ) 단, B에서 import한 C를 다시 export 해줘야 함!
DeskTop.com.test();
turnOn(Refrigerator.name);
turnOn(TV.name);
