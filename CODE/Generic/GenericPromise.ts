function orderCoffee(coffee, time) { ①
  setTimeout(() => {
    console.log(`${coffee} 제조 완료`);
  }, time);
}


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

//실제 활용할때는 Promise를 반환하는 함수에서의 상황으로 관찰을 해보겠다.
interface Posting{
  id:number,
  title:string,
  content:string,
}

const fetchPost = ()=>{
  return new Promise<Posting>((resolve,reject)=>{
    setTimeout(()=>{
      resolve({id:1,title:'제목',content:'내용'}) 
      //reject, resolve 함수의 매개변수는 웬만하면 다 any type이다.
      //resolve 함수의 매개변수가 저 비동기 과정에서의 성공 시의 반환값
      //reject 함수의 매개변수가 비동기 과정에서의 실패 시의 반환값
    },3000) 
  })
}

const postReq = fetchPost(); //postReq는 Promise
postReq.then((res)=>{
  console.log(res.id) //그냥 이렇게하면 res(반환값이 unknown 즉 디폴트값)
} ) //즉 여기서 res는 위의 프로미스 기준 성공시의 반환값