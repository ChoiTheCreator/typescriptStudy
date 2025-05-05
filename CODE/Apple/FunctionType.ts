//함수 타입은 ()=>{} 화살표 함수

//args는 string , return 값은 => 여기에 ㅋ

//1. function alias 이렇게 써도 괜찮고
type functionType = (a: string) => number;

type functionAllNumber = (args: number) => number;
type functionNoReturn = () => void;

//2. 선언식으로 하면됌
function hi(args: string): string {
  return '하이';
}

//객체의 메서드에서 타입지정은요 (만약 매개변수 넘버이고  리턴값도 넘버라면요)

//먼저 객체 내부 속성값에 대한 타입 지정 (1번)
const 회원정보: {
  name: string;
  plus: functionAllNumber;
  changeName: functionNoReturn;
} = {
  name: 'kim',
  plus(args): number {
    return args + 1;
  },
  changeName(): void {
    console.log('return값이 없고콘솔에만 찍혀야함');
  },
};

console.log(회원정보.plus(1));

// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.

// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.

// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.

type functionCharReturn = (args: string) => string;
type functionNumReturn = (args: string) => number;

const charReturn = (args: string) => {
  let result: string = args.replace(/^0+/, '');
  return result;
};

const numReturn: functionNumReturn = (args: string) => {
  let result = args.replace(/-/g, '');
  return parseFloat(result);
};

// (숙제3) 함수에 함수를 집어넣고 싶습니다.

// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.

// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.

// 이 함수는 어떻게 만들면 될까요?

// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
function quiz3(
  args1: string,
  args2: functionCharReturn,
  args3: functionNumReturn
): number {
  return args3(args2(args1));
}

console.log(quiz3('010-1111-2222', charReturn, numReturn));

type plusOne = (args: number) => number;
type changeName = () => void;
let 회원정보2: {
  name: string;
  age: number;
  pluseOne: plusOne;
  changeName: changeName;
} = {
  name: 'kim',
  age: 30,
  pluseOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log('안녕');
  },
};
회원정보2.pluseOne(1);
회원정보2.changeName();


