interface person {
  student: boolean;
  age: number;
}
let person: person = { student: true, age: 20 };

function 함수({ student, age }: person) {
  //객체 자체를 매개변수로 받는다해도
  //매개변수 타입은 너가 지정해야겠습니다. 조상님이 대신 해주지 않으니까요
  console.log(student, age);
  //리턴타입이 없기에 여기서 함수자체 리턴타입을 넣지 않아도 동작 시벌 개사기네
}
함수({ student: true, age: 20 });

// **(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.**

// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.

// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.

// (조건2) Math.max() 사용금지 반복문이나 쓰셈

function max(...args: number[]): number {
  let max = 0;
  args.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

console.log(max(1, 3, 4, 5));

// **(숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.**

// ```tsx
// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
// ```

// 어떻게 코드를 짜야할까요?

// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.

interface comment {
  user: string;
  comment: number[];
  admin: boolean;
}
function comment({ user, comment, admin }: comment) {
  console.log(user, comment, admin);
}
comment({ user: 'kim', comment: [3, 5, 4], admin: false });

// **(숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.**

// 어떻게 코드를 짜야할까요?

// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.

// **저는 어떻게 했냐면**

function wine(...args: any[]) {
  args.forEach((element: any) => {
    console.log(element);
  });
}
wine([40, 'wine', false]);
