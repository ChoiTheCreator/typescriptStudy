import './App.css';

function App() {
  //삼항연산자를 바인딩하는 곳은 리액트 환경에서임. -> 여기서는 Js 단독이기에 상관없다.
  //marry function
  function marry(x: number, y: boolean, z: string): string {
    const num: number = x % 100;
    const house: number = y ? 500 : 0;
    const att: number = z === '상' ? 100 : 0;

    const total = num + att + house;
    console.log(total);
    if (total >= 600) {
      return '결혼가능';
    } else {
      return '못함';
    }
  }

  //array type Filtering F(x)
  function arrFilter(arr: (number | string)[]): number[] {
    const filteredArr: number[] = [];
    arr.forEach((value) => {
      //typeof 비교 할때 뒤의 비교 대상은 'type 문자열'임
      if (typeof value === 'number') {
        filteredArr.push(value);
      } else {
        filteredArr.push(parseFloat(value));
      }
    });
    // 1. typeof == 'number' 2. ; string|number[] -> 이런식으로 선언하는거임
    console.log(filteredArr);
    return filteredArr;
  }

  //teacher subject osiate F(x) -> 선생님 이름을 객체에 집어넣으면 그 선생님이 가르치고 있는 과목 중 맨 뒤의 1개 과목을 return해주고 싶다!
  const 철수쌤 = { subject: 'math' };
  const 영희쌤 = { subject: ['science', 'english'] };
  const 민수쌤 = { subject: ['science', 'art', 'korean'] };
  function teacherOsiate(obj: { subject: string | string[] }): string {
    const len = obj.subject.length;
    let ans: string = '';

    if (typeof obj.subject === 'string') {
      ans = obj.subject;
      return obj.subject;
      //배열인지 아닌지 확인하는 가장 강력한 메서드임 일반 배열 뿐만 아니라 객체배열 또한 검사가 가능함.
    } else if (Array.isArray(obj.subject)) {
      ans = obj.subject[len - 1];
      return obj.subject[len - 1];
    }
    console.log(ans);
    return '';
  }

  //object 타입 정의한 type 변수 두개를 & 합칠때 중복된 속성
  function findOutObjectCommon(): void {
    type obj1 = { common: string };
    type obj2 = { common: string };

    type obj3 = obj1 & obj2;

    const appendObject: obj3 = { common: '하이' };
    console.log(appendObject);
  }

  //1. 타입 Object여야함 + color 속성 가질수도 있고 문자 들어와야함 + size 속성 있어야함 항상 숫자임
  // + position 변경불가한 속성이고 숫자가 담긴 array자료야 들어와

  //2. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다.
  //{ name : 'kim', phone : 123, email : 'abc@naver.com'}
  //object 안에 있는이름, 전화번호, 이메일속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
  type objThreeCase = { color?: number; size: number; position: number[] };
  type objTypeTest = {
    name: string;
    phone: number;
    email: string;
  };

  type adultTest = { isAdult: boolean };

  type appendTest = objTypeTest & adultTest;
  function makethisShit(): appendTest {
    const testObj: appendTest = {
      name: '최원빈',
      phone: 193,
      email: 'wonbin',
      isAdult: true,
    };
    console.log(testObj);
    return testObj;
  }

  return (
    <div>
      <h2> marry 함수 결과 :{marry(85, true, '상')}</h2>
      <h2> arrFilter 함수 결과 :{arrFilter([123, '3'])}</h2>
      <h2> teacherOsiate 함수 결과 :{teacherOsiate(영희쌤)}</h2>
      <h2> appendTest Type 시험 : {JSON.stringify(makethisShit())}</h2>
    </div>
  );
}

export default App;
