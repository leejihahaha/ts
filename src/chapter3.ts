/**
 * 맵드 타입: 객체 타입 조작
 * 타입별칭으로만 사용가능
 * 실무에서도 많이 사용
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]: User[key];
};

//한명의 유저정보 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "아무개",
    age: 22,
  };
}

//한명의 유저정보를 수정하는 기능
function updateUser(user: User) {
  //수정하는 기능
}

updateUser({
  id: 1,
  name: "아무개",
  age: 25,
});
