//any
//특정변수의 타입을 우리가 확실히 모를때 사용
let anyVar: any = 10;

anyVar = true;
anyVar = {};
anyVar = () => {};

let num: number = 10;
num = anyVar;

//any를 지정할 경우 아무 값이나 넣을 수 있다. 치트키!
//타입검사를 다 통과하는 타입이라 타입검사를 안하는것과 같음
//런타임 에러 발생할 수 있어서 최대한 쓰지 않기!

//unknown
//any와 같게 모든 값을 저장할 순 있지만 차이점이 있다!
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  //타입정제를 하면 할당가능
  num = unknownVar;
}

// num= unknownVar;  //허용x, 연산자체가 안됨
