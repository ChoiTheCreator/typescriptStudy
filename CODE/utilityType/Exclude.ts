type A = Exclude<String | boolean, boolean>;

type B2 = Extract<String | boolean, boolean>;

type T1 = Exclude<number, string>; // number (string이 없으므로 그대로 유지)
type T2 = Extract<number, string>; // never (겹치는 게 없으므로 제거됨)
