//void -> 공허 -> 아무것도 없다

import { log } from "console";

function func1(): string {
  return "hello"; // 값 반환
}

//undefined으로 지정하면 에러발생
function func2(): void {
  console.log("hello"); //출력
}

let a: void;

// a=1;
// a="hello"
a = undefined;
// a = null;   //-> strictNullChecks: false로 하면 가능

//never -> 존재하지 않는 불가능한 타입, 모순
//그 어떠한 값도 저장이 불가능!
function func3(): never {
  //반환이 안되는 정상적인 종료가 안됨. 그때 never(해석:반환값 자체가 있다는 것 자체가 모순!)
  while (true) {}
}

function func4(): never {
  throw new Error();
}
