/**
 * 제네릭
 * 제네릭 함수를 만들면 함수의 인수에 따라 반환값의 타입을 가변적으로 정해줄 수 있다
 * 모든 타입에 두르두르 쓸 수 있는 범용적인 함수
 */

//1. <T>:타입을 저장하는 변수 선언
//2.매개변수 value타입을 바꿔줌, 반환값도 바꿔줌
function func<T>(value: T): T {
  return value;
}

let num = func(10);

if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);
let str = func("string");
//튜플타입
let arr = func<[number, number, number]>([1, 2, 3]);
