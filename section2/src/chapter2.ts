//배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im"];

let boolArr: Array<boolean> = [true, false, true];

//배열요소 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플 (타입스크립트에만 있다)
//길이와 타입이 고정된 배열(순서변경x)
//규칙 적용(예: 순서와 위치)
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["이아무개", 1],
  ["김아무개", 2],
  //   [3, "박아무개"], //에러
];
