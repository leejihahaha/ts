/**
 * Pick<T,K>
 * 뽑다, 고르다
 * 객체타입으로부터 특정 프로퍼티만 골라내는 그런 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T,K>
 * 생략,빼다
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K,V>
 * 실무에서 자주 사용
 * 객체타입을 만들어주는 유틸리티 타입
 */

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

// type ThumbnailLegacy = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
// };

//위와 같은 타입
type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
