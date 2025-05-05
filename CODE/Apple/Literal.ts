//가위바위보
function hand(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return ['가위'];
}

//const 변수의 한계 => 변하면 안되는 값 넣을떄 쓰는거임
//리터럴 타입은 const 변수인데 const는 한개만 넣는다면 얘는 두개 이상 union으로 넣을수 있다는 거임요

//리터럴 타입 문제
const obj = {
  name: 'kim',
};

console.log(obj.name);
//리터럴 타입 매개변수 -> kim
function myF(args: 'kim') {}

myF('kim');
//같은값이잖아요 -> 타입이 달라서 이렇게 쓰면 오류가 남
//같은 name인데도 불구하고 ㅠ
myF(obj.name as 'kim');
