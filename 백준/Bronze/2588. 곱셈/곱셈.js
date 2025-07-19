const [a, b]=require('fs')
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\s+/)
  .map(Number);
var c=b-(Math.floor(b/100)*100); //85
var d=c-(Math.floor(c/10)*10); //5
console.log(a*d);
var sum1=a*d;
console.log(a*Math.floor(c/10));
var sum2=a*Math.floor(c/10)*10;
console.log(a*Math.floor(b/100));
var sum3 = a*Math.floor(b/100)*100;
console.log(sum1+sum2+sum3);