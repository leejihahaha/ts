//unknown 모든 타입의 슈퍼타입

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;

  let unknownVar: unknown;

  //   let num: number = unknownVar; //다운캐스팅이 안되는 것
}

//never 타입(모순, 불가능)
//그 어떤 값도 저장할 수 없다

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();

  //   let never1: never = 10;
}

//void 타입
//반환값이 없는 함수에 명시

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }
  let voidVar: void = undefined;
}

//any 타입
//독특함- 타입 계층도를 무시함(치트키!)-> 위험하기때문에 사용 지양

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar; //**unKnown의 다운캐스팅 가능
  undefinedVar = anyVar; //any 타입의 다운캐스팅 가능

  //   neverVar = anyVar;
}
