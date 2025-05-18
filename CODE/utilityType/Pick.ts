interface Post {
  title: string;
  tags: string;
  content: string;
  thumbnail: string;
}
//객체 타입으로 부터 특정 프로퍼티만 딱 골라내는 기능
type Pick2<T, K extends keyof T> = {
  [key in K]: T[key];
};

//T <- post 인터페이스가 되므로
//
//객체 속성을 전부 갖을 수 없다면 아직 (일단 미완성으로 두는것)
const legacyPost: Pick2<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '어쩌구',
};
