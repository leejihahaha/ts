//enum 타입(열거형타입)
//여러가지 값들에 각각 이름을 부여해 열거하고 사용하는 타입
//enum은 컴파일 결과가 사라지지 않는다!

enum Role { //숫자할당을 안하더라도 자동으로 할당됨(1씩 할당)
  ADIM = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: "이아무개",
  role: Role.ADIM, //0 <- 관리자
};
const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반유저
};
const user3 = {
  name: "김아무개",
  role: Role.GUEST, //2 <- 게스트
  //2 <- 게스트
};

console.log(user1, user2, user3);
