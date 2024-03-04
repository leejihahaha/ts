/**
 * 선언 합침
 * 모듈 보강작업할때 사용
 */

interface Person {
  name: string;
}

interface Person {
  //   name: number; //충돌 허용 안됨
  age: number;
}

const person: Person = {
  name: "",
  age: 20,
};

/**
 * 모듈보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hi",
};
