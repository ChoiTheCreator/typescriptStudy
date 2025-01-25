/*eslint-disbale*/
const First = () => {
  //배열 타입 지정하는법
  const 회원목록: string[] = ['문자열만 들어가셈', '딴것들은 못들어감 ㅠ'];

  //객체 타입 지정
  const 객체목록: { src1: string; src2: string } = { src1: '하나', src2: '둘' };

  //자동으로 쉴드 쳐주는 tsx
  const shieldString = '하이';

  //굳이 귀찮게 타입 변경 안해도됌
  const NumberArray = [1, 2, 3];

  const favorite: { title: string; artist: string } = {
    title: 'jazz',
    artist: 'chet',
  };

  type Project = { member: string[]; days: number; started: boolean };

  const project: Project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
  };

  return <div></div>;
};

export default First;
