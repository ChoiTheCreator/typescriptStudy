interface product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };

interface bucket {
  product: string;
  price: number;
}
let 장바구니: bucket[] = [
  { product: '청소기', price: 7000 },
  { product: '삼다수', price: 800 },
];

interface CardBucket extends bucket {
  card: boolean;
}

let extenedProduct: CardBucket = {
  product: '청소기',
  price: 7000,
  card: false,
};
// **(숙제4) object 안에 함수를 2개 넣고 싶은데요**

// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.

// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.

// 이 object 자료를 어떻게 만들면 될까요?

// interface를 이용해서 object에 타입지정도 해보십시오.

interface math {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}

var mathy: math = {
  plus(x, y) {
    return x + y;
  },
  minus(x, y) {
    return x - y;
  },
};
