
# 🚀 TypeScript에서 Promise를 실전처럼 다루기 (with 타입 안정성)

비동기 프로그래밍의 핵심 도구인 **Promise**,  
단순히 `.then`, `.catch`만 쓰는 데서 끝내지 말고,  
**직접 정의한 타입과 함께 안전하게 다루는 방법**까지 정리해봅니다.

---

## ✅ 기본 구조 복습

```ts
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve(20); // 성공 시
    } else {
      reject(new Error('비동기 작업 실패')); // 실패 시
    }
  }, 3000);
});

promise
  .then((result) => console.log('성공!', result))
  .catch((err) => console.log('실패!', err.message));
```

### ✔️ 설명

- `resolve(20)`: 성공 시 결과값을 전달
- `reject(new Error(...))`: 실패 시 오류 객체를 전달
- `.then()`에서는 `resolve`로 전달한 값을 받음
- `.catch()`에서는 `reject`로 전달한 오류를 받음

> `resolve`와 `reject`의 매개변수는 기본적으로 `any`지만,  
> `Promise<T>`와 함께 사용하면 타입 안정성을 확보할 수 있습니다.

---

## 🧪 실전 예시: 게시글(Post) 정보를 비동기로 가져오기

### 🔸 게시글 타입 정의

```ts
interface Posting {
  id: number;
  title: string;
  content: string;
}
```

### 🔸 Promise를 반환하는 함수로 구현

```ts
const fetchPost = () => {
  return new Promise<Posting>((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: '제목', content: '내용' });

      // reject, resolve 함수의 매개변수는 웬만하면 다 any type이다.
      // resolve: 성공 시 결과값
      // reject: 실패 시 오류값 (보통 Error 객체)
    }, 3000);
  });
};
```

- 여기서 `Promise<Posting>`을 반환하기 때문에,
- `.then()` 안에서 `res`는 `Posting` 타입으로 추론됩니다.

---

### 🔸 실제 호출 예시

```ts
const postReq = fetchPost(); // postReq는 Promise<Posting>

postReq.then((res) => {
  console.log(res.id); // ✅ 타입 안전하게 접근 가능
});
```

> 즉, `.then((res) => ...)` 내부에서 `res`는 `resolve`가 전달한 `Posting` 객체이므로  
> 우리가 정의한 `interface Posting`에 따라 안전하게 접근할 수 있습니다.

---

## 🧠 정리

| 구문 | 설명 |
|------|------|
| `resolve(value)` | 비동기 성공 결과값 전달 |
| `reject(reason)` | 비동기 실패 사유 전달 (`Error` 권장) |
| `new Promise<T>()` | 제네릭으로 성공 타입 지정 가능 |
| `.then((res) => ...)` | 성공 시 `resolve` 결과를 받음 |
| `.catch((err) => ...)` | 실패 시 `reject` 오류를 받음 |

---

**실전에서는 항상 `Promise<T>`로 타입을 명확히 지정해두면,  
코드의 안정성과 가독성이 훨씬 좋아집니다.**
