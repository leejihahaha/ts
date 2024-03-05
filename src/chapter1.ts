/**
 * 인덱스드 엑세스 타입
 * 인덱스를 이용해 다른 타입내의 특정 프로퍼티 타입을 추츨하는 타입
 */

import { log } from "console";
//interface는 객체타입 정의에 특화,배열타입정의 불편
//type별칭은 배열타입정의 적절

//1.객체
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// Post["author"] 타입만 들어올수 있다.
//중첩가능
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "아무개",
    age: 22,
  },
};

printAuthorInfo(post.author);

//2.튜플

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];
type TupNum = Tup[number];
