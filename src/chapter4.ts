//타입별칭(타입을 변수처럼 사용해 중복제거)
//주의! 동일한 스코프에 중복된 이름으로 타입 별칭 선언하면 안됨
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location?: string;
};

let user: User = {
  id: 1,
  name: "이아무개",
  nickname: "아무개",
  birth: "2024.01.01",
  location: "대한민국",
};

let user2: User = {
  id: 1,
  name: "이아무개",
  nickname: "아무개",
  birth: "2024.01.01",
};

//인덱스 시그니처(key와 value의 타입을 기준으로 규칙을 이용해 객체타입 정의)
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let contryNumverCodes: CountryNumberCodes = {
  Korea: 410,
};
