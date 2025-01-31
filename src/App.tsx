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
  function teacherOsiate(obj: { subject: string | string[] }) {
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

  return (
    <div>
      <h2> marry 함수 결과 :{marry(85, true, '상')}</h2>
      <h2> arrFilter 함수 결과 :{arrFilter([123, '3'])}</h2>
      <h2> teacherOsiate 함수 결과 :{teacherOsiate(영희쌤)}</h2>
    </div>
  );
}

export default App;
