/**
 * 조건부 타입
 * 제네릭과 함께 쓸때 유용하다.
 */
type A = number extends string ? string : number;

type ObjA = {
  //슈퍼타입
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};
type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

//replaceAll(" ", ""): 모든 공백문자를 빈문자로 바꿔주는 메서드
//오버로드 시그니처
function remogeSpaces<T>(text: T): T extends string ? string : undefined;
function remogeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

//반환값은 스트링
let result = remogeSpaces("hi im winterlood");
result.toUpperCase(); //문자열 메서드

let result2 = remogeSpaces(undefined);
