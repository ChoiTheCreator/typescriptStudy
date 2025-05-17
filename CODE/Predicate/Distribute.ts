type StringNumberSwitch<T> = T extends number ? string : number;

let c: StringNumberSwitch<number | string>;
//제네릭에다가 유니온타입을 주입한다면
// 이 유니온 타입이 통으로 들어가는게 아니라, 각 유니온으로 묶인 타입이 분배되어 들어간다
// 1. number 이 T로 들어감 (True 니까 number)
// 2. string 이 T로 들어감 (false 니까 string)

// 두개가 묶이므로 결과적으로 number | string으로 들어가는것

let d: StringNumberSwitch<number | string | boolean>;

//1,2,3 세 타입이 분산 (분배법칙마냥)적으로 조건부에 들어간다
//true일 경우의 number (number type)
//false 일 경우 string (string, boolean)
//결과적으로 string | number의 타입을 갖겠다.

//실제 활용사례
//Extract (타입을 추출) 매개변수 U에 해당하는 타입만 추출하고 싶을때 어떻게 해야하는가?

type ExtractU<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
