const fs = require('fs');
const [a,b,c,d,e,f] = fs.readFileSync(0, 'utf-8').trim().split(" ").map(Number);


const deta = a*e-b*d
const x = (c*e-b*f)/deta | 0
const y = (a*f-c*d)/deta | 0
console.log(Math.round(x), Math.round(y))