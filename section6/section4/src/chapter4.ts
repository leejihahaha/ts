/**사용자 정의 타입가드 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined; //undefined가 아니면 강아지
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined; //undefined가 아니면 강아지
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    //강아지
  } else if (isCat(animal)) {
    //고양이
  }
}
