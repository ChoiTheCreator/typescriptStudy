class Lol {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }
}

Lol.prototype.r = 'ult';

var riven = new Lol('33', '22');
console.log(riven.q);
console.log(riven.r);

function Lol2(q, w) {
  this.q = q;
  this.w = w;
}

var yasou = new Lol2('하세기', '장막');

console.log(yasou.q);
