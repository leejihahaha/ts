/**
 * infer: 조건부 타입 내에서 특정 타입만 추론하는 기능
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
//1. T는 프로미스 타입이어야한다
//2. 프로미스 타입의 결과값 타입을 반환해야 한다.

//promise의 결과값 타입만 추론
type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
