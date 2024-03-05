/**
 * keyof 연산자 :객체 타입에 적용하는 연산자
 *실무에서도 많이 사용
 */

type Person = typeof person; //추론

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "아무개",
  age: 22,
};

getPropertyKey(person, "name");
