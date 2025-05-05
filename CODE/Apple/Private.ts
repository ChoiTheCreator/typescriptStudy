class User {
  public name: string;
  private familyName: string;

  constructor() {
    this.name = 'kim';
    this.familyName = 'choi';
  }
  changeFamilyPrivateName() {
    this.familyName = 'park';
  }
}

var user2 = new User();
//private 클래스 속성에 함부로 못 접근함
//그러나 클래스 내부에서 바꿔주면 가능요
user2.changeFamilyPrivateName(); //가능
// console.log(user2.familyName); // 불가능
console.log(user2);
