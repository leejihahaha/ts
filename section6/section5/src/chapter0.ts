/**
 * 인터페이스(객체타입을 정의하는데 특화됨)
 * //type별칭은 유니언가능
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void; //호출시그니쳐
  sayHi(a: number, b: number): void; //호출시그니쳐
}

// type Type1 = number | string | Person;
// type Type2 = number & string & Person;

const person: Person = {
  name: "이정환",
  sayHi: function () {
    console.log("hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
