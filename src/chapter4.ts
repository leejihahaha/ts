/**
 * 템플릿 리터럴 타입
 * 문자열로 여러 상황 표현할때 유용
 * 많이 사용하진 않음
 *
 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

// const coloredAnimal: ColoredAnimal=""
