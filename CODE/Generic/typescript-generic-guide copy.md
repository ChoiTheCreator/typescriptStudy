
# 📘 TypeScript에서 Generic Interface와 Index Signature 제대로 쓰기

TypeScript를 쓰다 보면 다음과 같은 고민이 생기죠.

구조는 동일한데 타입만 다르게 쓰고 싶다?
- 매번 타입 좁히기 (`type narrowing`) 하는 게 귀찮다?
- 객체의 key가 유동적인 경우 타입을 어떻게 잡아야 할까?

이 글에서는 **Generic**, **Index Signature**, **Type Alias**의 차이를 간단한 예제와 함께 정리하고,  
**왜 Generic Interface를 써야 하는지** 실전 예시로 보여드립니다.

---

## 1. Generic Interface란?

`interface`에 타입 매개변수 `<T>`를 붙이면, 값의 타입을 재사용 가능하게 만들어줍니다.

```ts
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keypair1: KeyPair<string, number> = {
  key: 'id',
  value: 101,
};

let keypair2: KeyPair<string, string[]> = {
  key: 'tags',
  value: ['ts', 'js'],
};
```

> 구조는 같지만 내부 타입만 다른 여러 데이터를 효율적으로 다룰 수 있게 해주는 게 Generic Interface의 핵심입니다.

---

## 2. Index Signature란?

Index Signature는 **객체의 key가 유동적일 때** 유용합니다.

```ts
interface NumberMap {
  [key: string]: number;
}

const score: NumberMap = {
  math: 90,
  eng: 80,
};
```

주의할 점: JavaScript의 객체 키는 사실 **항상 string**입니다.

```ts
const obj = {
  1: 'hi',
};
console.log(obj['1']); // 'hi'
```

---

## 3. Index Signature + Generic

Index Signature는 Generic과 함께 쓰면 훨씬 유연해집니다.

```ts
interface MapGeneric<T> {
  [key: string]: T;
}

const booleanMap: MapGeneric<boolean> = {
  isAdmin: true,
  hasAccess: false,
};
```

---

## 4. Interface vs Type Alias

Generic은 `interface`뿐만 아니라 `type`으로도 선언할 수 있습니다.

```ts
type MapType<T> = {
  [key: string]: T;
};

const strMap: MapType<string> = {
  first: 'hello',
  second: 'world',
};
```

| 구분 | `interface` | `type` |
|------|-------------|--------|
| 선언 방식 | 선언문 (`interface A {}`) | 할당문 (`type A = {}`) |
| 중복 확장 | ✅ 가능 | ❌ 불가능 |
| 조건부/유니언 타입 | ❌ 제한적 | ✅ 가능 |
| 클래스 구현에 사용 | 일반적 | 가끔 사용 |

---

## 5. 실전 예시: 학생 vs 개발자 유저 구분

### 👎 유니언 타입을 사용할 경우

```ts
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

const goSchool = (user: User) => {
  if (user.profile.type !== 'student') {
    console.log('님 학생아님');
    return;
  }
  console.log(user.profile.school); // 타입 좁히기 이후 접근
};
```

### 👍 Generic Interface로 개선

```ts
interface UserGeneric<T> {
  name: string;
  profile: T;
}

const goSchoolGeneric = (user: UserGeneric<Student>) => {
  console.log('등교 ㄱㄱ', user.profile.school); // 좁히기 없이 바로 접근 가능
};
```

---

## 6. 실무 팁: 타입 생략 vs 명시

아래 두 방식은 모두 동작합니다.

```ts
const stringList = new GenericList(['a', 'b']);             // T = string 자동 추론
const stringListExplicit = new GenericList<string>(['a', 'b']); // 명시적 타입 지정
```

하지만 명시적으로 타입을 지정하는 것이 더 안정적입니다.

> 타입이 복잡하거나 혼합될 여지가 있을 땐 **명시적으로 타입을 지정하는 게 더 명확하고 안전**합니다.

---

## ✅ 마무리 요약

| 개념 | 핵심 역할 | 요약 |
|------|-----------|------|
| Generic Interface | 타입 재사용 | 구조는 같고 타입은 유연하게 |
| Index Signature | 유동적인 key | 동적인 객체 표현에 유용 |
| Type Alias | 타입 조합에 강함 | 유니언/조건부/맵핑 타입 조합에 좋음 |

---

**결론: 타입 좁히기 피하면서 안정성과 확장성을 모두 챙기고 싶다면, Generic Interface를 적극 활용하자!**
