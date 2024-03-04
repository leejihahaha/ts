//기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10; //리터럴 타입

//객체 타입간의 호환성
//조건이 더 적은 타입이 슈퍼타입이 된다
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yello",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal;

//초과 프로퍼티 검사
//실제 정의하지 않은 프로퍼티를 작성하면 안되도록 막는 검사
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book;

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs",
};
