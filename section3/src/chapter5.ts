/**
 * 타입추론
 */

//변수의 초기값을 기준으로 타입을 추론.
//코드가 간결, 생산성이 올라감
//모든 상황을 추론해주진않는다
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "아무개",
  profile: {
    nickname: "김아무개",
  },
  urls: ["http://www.google.com"],
};

let { id, name, profile } = c;

function func(message = "hello") {
  return "hello";
}

//당황스러운 상황, 초기값이 없는경우 - any타입의 진화(추천하지 않음)

let d; //암묵적 any(들어가는 값에 따라 변화)
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

//명시적으로 any타입을 지정하면 진화는 없다.

//let으로 선언된 경우엔 number 타입
const num = 10; // const선언-> number 리터럴타입
const str = "hello";

let arr = [1, "string"]; //union타입(합집합)
