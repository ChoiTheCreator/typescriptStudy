type add = (args: number) => void;
type print = () => void;
class User2 {
  private static x = 10;
  public static y = 20;

  static addOne(args: number): void {
    User2.x = User2.x + args;
  }
  static printX(): void {
    console.log(User2.x);
  }
}

User2.addOne(3); //이렇게 하면 x가 3 더해져야함
User2.addOne(4); //이렇게 하면 x가 4 더해져야함
User2.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

//User2가 직접 접근하는 함수들이니까 대깨 타입을 staic으로 하면 되긌네
class Square {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {}
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML('beforeend', square);
  }
}

let 네모 = new Square(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
