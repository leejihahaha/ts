/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>;

/**실용적인 예제 */
//T가  U 의 서브타입인지
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

//결과
//number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
