const Second = () => {
  const twoOrOne: number | string = 'kim';
  const objectTwo: { src: number | string };
  const arrayTwo: number[] | string[];

  const 아무거나: any;
  let safer: unknown;
  safer = 1;

  //any는 타입실드 해제라 타입 선언의 관점이 아닌 타입 선언의 관점임

  function hi(x?: string) {
    if (x === undefined) {
      console.log('이름이 없네요');
    } else {
      console.log('홍길동임');
    }
  }

  hi();
  hi('하이');

  return <div></div>;
};

export default Second;
