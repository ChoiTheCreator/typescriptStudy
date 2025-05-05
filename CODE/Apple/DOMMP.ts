const img = document.querySelector('#image');
const btn = document.querySelector('#btn');

btn?.addEventListener('click', () => {
  if (img instanceof HTMLImageElement) {
    img.src = 'new.jpg';
  }
});

//link가 3개이상임 args라는 녀석으로 ㄱㄱ
const link = document.querySelectorAll('.naver');
link.forEach((args) => {
  if (args instanceof HTMLAnchorElement) {
    args.href = 'https://kakao.com';
  }
});
