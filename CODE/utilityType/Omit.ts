interface Post {
  title: string;
  tags: string;
  content: string;
  thumbnail: string;
}
//객체 타입으로 부터 특정 프로퍼티만 딱 제외시키는 기능이다.

const legacyPostOmit: Omit<Post, 'title'> = {
  tags: 'ji',
  content: '1234',
  thumbnail: '12',
};

//
