interface keyPair<K, V> {
  key: K;
  value: V;
}

//1. Generic interface로 선언할 경우, 무조건 타입 변수들을 다 삽입해줘야한다 아래처럼
let keypair2: keyPair<string, number> = {
  key: 'key',
  value: 2,
};

let keypair3: keyPair<string, string[]> = {
  key: 'string',
  value: ['1'],
};

//#2. IDX SIG
interface IndexSig {
  [key: string]: number;
}

let idxSig1 = {
  key: 12,
  1: 'string', // 자바스크립트의 객체 키는 항상 문자열이기에 내부적으로 바뀜
};

interface NumberMap {
  [key: string]: number; //“이 객체의 모든 문자열 키는 number 값을 가져야 한다.”
}

//#3. IDX SIG with Generic -> 좀 더 섹시하게 활용가능
interface MapGeneric<T> {
  [key: string]: T;
}
let booleanMap: MapGeneric<Boolean> = {
  hi: true,
  // wrong: 1,
};

//#4. Generic Type? (Interface와 다를건 type은 조건부 타입, 유니온 타입이 가능하다 정도) 그리고 선언할때 =가 없냐 있냐
type MapType<T> = {
  [key: string]: T;
};

let booleanType: MapType<Boolean> = {
  hi: true,
  // wrong: 1,
};

//#5. 종합적 활용 (Generic Interface)
// 유저를 구분해보자 (학생 / 개발자)
interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User {
  name: string;
  profile: Student | Developer;
}

const developerUser: User = {
  name: '개발자 1',
  profile: {
    type: 'developer',
    skill: 'ts',
  },
};
const studUser: User = {
  name: '학생 1',
  profile: {
    type: 'student',
    school: 'MJU',
  },
};

const goSchool = (user: User) => {
  if (user.profile.type !== 'student') {
    console.log('님 학생아님');
    return;
  } // 매번 이렇게 타입 좁히기를 해야한다면? 이게 귀찮아서 Generic

  const school = user.profile.school;
  console.log('등교 ㄱㄱ', school);
};

//4. Generic Interface를 쓰는 이유 
interface UserGeneric<T> {
  name: string;
  profile: T;
}

const developerUserG: UserGeneric<Developer> = {
  name: '개발자 12',
  profile: {
    type: 'developer',
    skill: 'ts',
  },
};
const studUserG: UserGeneric<Student> = {
  name: '학생 12',
  profile: {
    type: 'student',
    school: 'MJU',
  },
};

const goSchoolGeneric = (user: UserGeneric<Student>) => {
  const school = user.profile.school;
  console.log('등교 ㄱㄱ', school);
};
