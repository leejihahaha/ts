/**
 * 타입좁히기 =타입가드
 * 조건문 등을 이용해 넓은 타임에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  //객체 타입(클래스가 아님)
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    //value가 있을 때에만(&&)
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}

//type of 연산자는 null에 type of를 해도 object를 똑같이 반환
//instanceof 연산자는 a의 값이  b의 객체가 맞냐는 의미
// 왼쪽(value)에 오는 값이 오른쪽에 오는 클래스의 인스턴스인지 확인하는 연산자
