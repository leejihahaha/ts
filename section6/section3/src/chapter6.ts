/**
 * 타입단언
 
 * */

type Person = {
  //별칭
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "아무개";
person.age = 11;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입단언의 규칙
 * 값 as 단어 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야함
 */

let num1 = 10 as never; //a가 b의 슈퍼타입
let num2 = 10 as unknown; //a가b의 서브타입
let num3 = 10 as unknown as string; //다중단언(좋은 방법아님)

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // readonly 읽기 전용 속성

/**
 * Non Null단언(위험한 문법)
 */

type Post = {
  title: string;
  author?: string; //?-> 옵셔널 체이닝
};

let post: Post = {
  title: "게시글 1",
  author: "아무개",
};

//느낌표 연산 = Non Null단언
const len: number = post.author!.length;
