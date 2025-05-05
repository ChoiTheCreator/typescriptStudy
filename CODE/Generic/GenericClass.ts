//일단 숫자 리스트 클래스를 만들어보자
class NumberList {
  private list: number[];
  constructor(list: number[]) {
    this.list = list;
  }

  push(data: number) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

//이번엔 문자열 리스트 클래스를 만들어보자
//그럼 우리가 만든 숫자 리스트 클래스를 복제해서 바꿔줘아하잖아. 이건 무지 비효율
class GenericList<T> {
  private list: T[];
  constructor(list: T[]) {
    this.list = list;
  }
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

const stringList = new GenericList<String>(['1', '2']);
const stringList2 = new GenericList<Number>([1, 2]);
const numList = new GenericList([1, 2]);
//쉽게 확장가능
