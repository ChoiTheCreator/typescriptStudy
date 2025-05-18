interface Post {
  title: string;
  tags: string;
  content: string;
  thumbnail: string;
}

type Required2<T> = {
  [key in keyof T]: T[key];
};
//객체 속성을 전부 갖을 수 없다면 아직 (일단 미완성으로 두는것)
const proto2: Required2<Post> = {
  title: '아직 미완성',
  content: '초안.. 임시 저장본',
  tags: '2',
  thumbnail: '썸네일임 ',
};
