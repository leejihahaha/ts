//object
//물음표는 선택적 프로퍼티. 있어도 없어도 됨
let user: { id?: number; name: string } = {
  id: 1,
  name: "이정환",
};

user.id;

let config: {
  //  readonly읽기 전용속성.
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};
