import { resolve } from "path";
/**
 * 프로미스
 */

import { rejects } from "assert";
import { log } from "console";
// import { resolve } from "path";

//타입스크립트는 비동기 작업의 결과값의 타입을 자동추론 불가능
//프로미스의 생성자 호출시 타입변수 할당해주면 비동기처리결과값의 타입을 직접명시가능
//단, reject 실패시 타입은 지정해줄 수 없다

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~ 때문에 실패");
  }, 3000);
});

promise.then((res) => {
  console.log(res * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

//3초뒤 임시 게시글 반환하는 함수
//함수의 반환값 타입을 직접 명시하는 방법
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
