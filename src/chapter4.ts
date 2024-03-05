/**
 * 제네릭 클래스
 */
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop(); //3제거
numberList.push(4); //4추가
numberList.print(); //[1,2,4]

const stringList = new List(["1", "2"]);
stringList.push("hello");
