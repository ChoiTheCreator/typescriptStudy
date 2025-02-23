class Bank {
  data = 0; //타입 명시해도 되고 안해도 되고 상관없다 그려
}

let john = new Bank();
let kim = new Bank();

console.log(john.data);
console.log(kim.data);

class Person {
  //this 쓰고싶다 그럼 내가 필드값쓰라 했잖습니까
  name: string;
  age: number;

  constructor() {
    this.name = 'kim';
    this.age = 20;
  }
  sayHi(): void {
    console.log('hi');
  }
}
var 닝겐 = new Person();
닝겐.sayHi();

// **(숙제1) Car 클래스를 만들고 싶습니다.**

// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.

// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.

// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.

// (동작 예시)
class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax(): number {
    return this.price / 10;
  }
}

let car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
//콘솔창 출력결과는 { model : '소나타', price : 3000 }console.log(car1.tax())//콘솔창 출력결과는 300

// **(숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.**

// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면

// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고

// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.

// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈

// (동작 예시)
class Word {
  num: number[] = [];
  str: string[] = [];
  constructor(...rest: (number | string)[]) {
    rest.forEach((args) => {
      //instanceof는 obj 타입 쓸때 (속성과 메서드를 포함하는 거 Array,Object 이런것들)
      //typeof는 number,string 같은 기본형 쓸때 (우리가 아는 그 8개임)
      if (typeof args === 'number') {
        this.num.push(args);
      } else if (typeof args === 'string') this.str.push(args);
    });
  }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
